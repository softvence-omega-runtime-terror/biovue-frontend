// "use client";

// import { useState, ChangeEvent } from "react";

// const UploadIcon = () => (
//   <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="17 8 12 3 7 8" />
//     <line x1="12" y1="3" x2="12" y2="15" />
//   </svg>
// );

// export default function AddProductPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     redirectUrl: "",
//   });

//   const [focused, setFocused] = useState<Record<string, boolean>>({});

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const inputStyle = (name: string): React.CSSProperties => ({
//     width: "100%",
//     boxSizing: "border-box",
//     border: `1px solid ${focused[name] ? "#14A4A9" : "#E2E8F0"}`,
//     borderRadius: 8,
//     padding: "12px 14px",
//     fontSize: 14,
//     color: "#041228",
//     outline: "none",
//     fontFamily: "inherit",
//     backgroundColor: "#fff",
//     transition: "border-color 0.2s",
//   });

//   return (
//     <div className="container mx-auto py-8 px-4 flex justify-center">
//       {/* Single white card */}
//       <div className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 border border-[#D9E6FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

//         {/* Product Media */}
//         <div style={{ marginBottom: 28 }}>
//           <h2 style={{ fontSize: 16, fontWeight: 700, color: "#041228", margin: "0 0 16px 0" }}>
//             Product Media
//           </h2>
//           <div className="border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-white">
//             <UploadIcon />
//             <p style={{ margin: "12px 0 4px", color: "#041228", fontSize: 14, fontWeight: 400, textAlign: "center" }}>
//               Drag & drop images here, or{" "}
//               <span style={{ color: "#14A4A9", cursor: "pointer" }}>browse</span>
//             </p>
//             <p style={{ color: "#94A3B8", fontSize: 12, margin: 0 }}>Support: JPG, PNG (Max 5MB)</p>
//           </div>
//         </div>

//         {/* Basic Information */}
//         <div style={{ marginBottom: 28 }}>
//           <h2 style={{ fontSize: 16, fontWeight: 700, color: "#041228", margin: "0 0 16px 0" }}>
//             Basic Information
//           </h2>

//           <div style={{ marginBottom: 16 }}>
//             <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#041228", marginBottom: 8 }}>
//               Product Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter product name"
//               style={inputStyle("name")}
//               onFocus={() => setFocused(p => ({ ...p, name: true }))}
//               onBlur={() => setFocused(p => ({ ...p, name: false }))}
//             />
//           </div>

//           <div>
//             <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#041228", marginBottom: 8 }}>
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Detailed product description"
//               rows={5}
//               style={{ ...inputStyle("description"), resize: "none", lineHeight: 1.6 }}
//               onFocus={() => setFocused(p => ({ ...p, description: true }))}
//               onBlur={() => setFocused(p => ({ ...p, description: false }))}
//             />
//           </div>
//         </div>

//         {/* Pricing */}
//         <div style={{ marginBottom: 28 }}>
//           <h2 style={{ fontSize: 16, fontWeight: 700, color: "#041228", margin: "0 0 16px 0" }}>
//             Pricing
//           </h2>
//           <div>
//             <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#041228", marginBottom: 8 }}>
//               Price
//             </label>
//             <div style={{ position: "relative", maxWidth: 260 }}>
//               <span style={{
//                 position: "absolute", left: 14, top: "50%",
//                 transform: "translateY(-50%)", color: "#94A3B8", fontSize: 14,
//               }}>$</span>
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="0.00"
//                 style={{ ...inputStyle("price"), paddingLeft: 30 }}
//                 onFocus={() => setFocused(p => ({ ...p, price: true }))}
//                 onBlur={() => setFocused(p => ({ ...p, price: false }))}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Additional Details */}
//         <div style={{ marginBottom: 28 }}>
//           <h2 style={{ fontSize: 16, fontWeight: 700, color: "#041228", margin: "0 0 16px 0" }}>
//             Additional Details
//           </h2>
//           <div>
//             <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#041228", marginBottom: 8 }}>
//               Redirect url
//             </label>
//             <input
//               type="text"
//               name="redirectUrl"
//               value={formData.redirectUrl}
//               onChange={handleChange}
//               placeholder="abcl. com"
//               style={inputStyle("redirectUrl")}
//               onFocus={() => setFocused(p => ({ ...p, redirectUrl: true }))}
//               onBlur={() => setFocused(p => ({ ...p, redirectUrl: false }))}
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//           <button
//             style={{
//               width: "100%",
//               backgroundColor: "#14A4A9",
//               color: "#fff",
//               padding: "14px",
//               borderRadius: 10,
//               border: "none",
//               fontWeight: 600,
//               fontSize: 15,
//               cursor: "pointer",
//               fontFamily: "inherit",
//               transition: "background-color 0.2s"
//             }}
//             onMouseOver={e => e.currentTarget.style.backgroundColor = "#129297"}
//             onMouseOut={e => e.currentTarget.style.backgroundColor = "#14A4A9"}
//           >
//             Publish Product
//           </button>
//           <button
//             style={{
//               width: "100%",
//               backgroundColor: "#F1F5F9",
//               color: "#041228",
//               padding: "14px",
//               borderRadius: 10,
//               border: "none",
//               fontWeight: 600,
//               fontSize: 15,
//               cursor: "pointer",
//               fontFamily: "inherit",
//               transition: "background-color 0.2s"
//             }}
//             onMouseOver={e => e.currentTarget.style.backgroundColor = "#E2E8F0"}
//             onMouseOut={e => e.currentTarget.style.backgroundColor = "#F1F5F9"}
//           >
//             Save as Draft
//           </button>
//         </div>

//       </div>
//     </div>
//   );


"use client";

import { useCreateSupplierProductMutation } from "@/redux/features/api/SupplierDashboard/Product/SupplierProduct";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";


const UploadIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    redirectUrl: "",
    category: "",
    status: "draft" as "draft" | "published",
    image: undefined as File | undefined,
  });

  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [createProduct, { isLoading }] = useCreateSupplierProductMutation();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.files) {
      setFormData((prev) => ({ ...prev, [name]: e.target.files![0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createProduct({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price: formData.price,
        redirect_url: formData.redirectUrl,
        status: formData.status,
        image: formData.image,
      }).unwrap();

      toast.success("Product created successfully!");
      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        redirectUrl: "",
        category: "",
        status: "draft",
        image: undefined,
      });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create product.");
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    boxSizing: "border-box",
    border: `1px solid ${focused[name] ? "#14A4A9" : "#E2E8F0"}`,
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 14,
    color: "#041228",
    outline: "none",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
  });

  return (
    <div className="container mx-auto py-8 px-4 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 border border-[#D9E6FF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6">

        {/* Product Media */}
        <div>
          <h2 className="text-sm font-bold text-[#041228] mb-4">Product Media</h2>
          <label className="border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-white">
            <UploadIcon />
            <span className="mt-3 text-[#14A4A9] cursor-pointer">Browse</span>
            <input type="file" name="image" className="hidden" onChange={handleChange} />
          </label>
        </div>

        {/* Basic Information */}
        <div>
          <h2 className="text-sm font-bold text-[#041228] mb-4">Basic Information</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            style={inputStyle("name")}
            onFocus={() => setFocused(p => ({ ...p, name: true }))}
            onBlur={() => setFocused(p => ({ ...p, name: false }))}
            className="mb-4"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={5}
            style={{ ...inputStyle("description"), resize: "none", lineHeight: 1.6 }}
            onFocus={() => setFocused(p => ({ ...p, description: true }))}
            onBlur={() => setFocused(p => ({ ...p, description: false }))}
            className="mb-4"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            style={inputStyle("category")}
            onFocus={() => setFocused(p => ({ ...p, category: true }))}
            onBlur={() => setFocused(p => ({ ...p, category: false }))}
            className="mb-4"
          />
        </div>

        {/* Pricing & URL */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            style={inputStyle("price")}
            onFocus={() => setFocused(p => ({ ...p, price: true }))}
            onBlur={() => setFocused(p => ({ ...p, price: false }))}
          />
          <input
            type="text"
            name="redirectUrl"
            value={formData.redirectUrl}
            onChange={handleChange}
            placeholder="Redirect URL"
            style={inputStyle("redirectUrl")}
            onFocus={() => setFocused(p => ({ ...p, redirectUrl: true }))}
            onBlur={() => setFocused(p => ({ ...p, redirectUrl: false }))}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={inputStyle("status")}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-4 rounded-xl text-white font-bold ${isLoading ? "bg-gray-400" : "bg-[#14A4A9] hover:bg-[#129297]"}`}
        >
          {isLoading ? "Publishing..." : "Publish Product"}
        </button>
      </form>
    </div>
  );
}