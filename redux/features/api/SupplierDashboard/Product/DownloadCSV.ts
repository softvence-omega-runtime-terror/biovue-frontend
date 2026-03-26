export const downloadSampleCSV = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/download-sample`,
      {
        method: "GET",
        headers: {
          "Content-Type": "text/csv",
          "ngrok-skip-browser-warning": "any",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to download CSV");
    }

    // Get CSV blob
    const blob = await response.blob();

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;

    // File name
    link.setAttribute("download", "sample-products.csv");

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("CSV Download Error:", error);
  }
};
