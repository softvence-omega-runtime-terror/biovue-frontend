type ExecuteRecaptchaFn = (action?: string) => Promise<string>;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      enterprise?: {
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

type GetRecaptchaTokenOptions = {
  siteKey?: string;
  useEnterprise?: boolean;
  attempts?: number;
  delayMs?: number;
};

async function executeFromWindow(
  siteKey: string,
  action: string,
  useEnterprise: boolean,
) {
  const grecaptcha = window.grecaptcha;
  const executor = useEnterprise
    ? grecaptcha?.enterprise?.execute
    : grecaptcha?.execute;

  if (!grecaptcha?.ready || !executor) {
    throw new Error("RECAPTCHA_SCRIPT_NOT_AVAILABLE");
  }

  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      executor(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

export async function getRecaptchaToken(
  executeRecaptcha: ExecuteRecaptchaFn | undefined,
  action: string,
  options: GetRecaptchaTokenOptions = {},
) {
  const attempts = options.attempts ?? 8;
  const delayMs = options.delayMs ?? 250;
  const useEnterprise = options.useEnterprise ?? false;
  const siteKey = options.siteKey;
  let lastError: unknown;

  for (let i = 0; i < attempts; i += 1) {
    try {
      if (executeRecaptcha) {
        const token = await executeRecaptcha(action);
        if (token) {
          return token;
        }
      }
      if (siteKey) {
        const token = await executeFromWindow(siteKey, action, useEnterprise);
        if (token) {
          return token;
        }
      }
    } catch (error) {
      lastError = error;
    }

    await sleep(delayMs);
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error(siteKey ? "RECAPTCHA_SCRIPT_NOT_AVAILABLE" : "RECAPTCHA_NOT_READY");
}
