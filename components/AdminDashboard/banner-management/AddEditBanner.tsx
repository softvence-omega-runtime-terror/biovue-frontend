"use client";

import { useState, useRef, useEffect } from "react";
import { X, Upload } from "lucide-react";
import { Banner } from "./data";

interface AddEditBannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<Banner>) => void;
  existingBanner?: Banner | null; // if provided → Edit mode
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-[#0FA4A9]" : "bg-gray-300"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

const defaultForm = {
  title: "",
  type: "External Advertise" as "External Advertise" | "Internal Fallback",
  placement: [] as string[],
  scheduleFrom: "",
  scheduleTo: "",
  isActive: true,
  rotationPriority: 1,
  preview: "",
};

export default function AddEditBannerModal({
  isOpen,
  onClose,
  onSave,
  existingBanner,
}: AddEditBannerModalProps) {
  const isEdit = !!existingBanner;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState(defaultForm);
  const [previewImage, setPreviewImage] = useState<string>("");

  // Populate form when editing
  useEffect(() => {
    if (existingBanner) {
      setFormData({
        title: existingBanner.title,
        type: existingBanner.type as "External Advertise" | "Internal Fallback",
        placement: existingBanner.placement,
        scheduleFrom: existingBanner.scheduleFrom,
        scheduleTo: existingBanner.scheduleTo,
        isActive: existingBanner.isEnabled,
        rotationPriority: 1,
        preview: existingBanner.preview,
      });
      setPreviewImage(existingBanner.preview);
    } else {
      setFormData(defaultForm);
      setPreviewImage("");
    }
  }, [existingBanner, isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData((prev) => ({ ...prev, preview: url }));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData((prev) => ({ ...prev, preview: url }));
    }
  };

  const togglePlacement = (place: string) => {
    setFormData((prev) => ({
      ...prev,
      placement: prev.placement.includes(place)
        ? prev.placement.filter((p) => p !== place)
        : [...prev.placement, place],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-4 max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#9AAEB2]">
          <h2 className="text-lg font-semibold text-gray-900">
            {isEdit ? "Edit Banner" : "Add New Banner"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-6 ">
          {/* BASIC INFO */}
          <div>
            <p className="text-base font-semibold tracking-widest text-[#5E5E5E] uppercase mb-3">
              Basic Info
            </p>

            {/* Title */}
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-1">
                <h2 className="text-sm">Banner Title</h2>
              </div>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g. Summer Wellness Campaign 2024"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4A9] bg-[#F9F5FE]"
                required
              />
            </div>

            {/* Banner Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Type
              </label>
              <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden">
                {(["External Advertise", "Internal Fallback"] as const).map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={`py-2.5 text-sm cursor-pointer font-medium transition-colors ${
                        formData.type === type
                          ? "bg-[#0FA4A926] text-black border border-[#0FA4A9]"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-[#0FA4A9]"
                      }`}
                    >
                      {type}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* MEDIA UPLOAD */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#99A1AF] uppercase mb-3">
              Media Upload
            </p>
            <div
              className="border-2 border-[#46ECD5] rounded-xl overflow-hidden cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {/* Upload prompt */}
              <div className="flex flex-col items-center justify-center py-4 gap-1">
                <div className="w-10 h-10 rounded-full bg-[#0FA4A9] flex items-center justify-center">
                  <Upload size={18} className="text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-gray-400">
                  SVG, PNG, JPG or MP4 (max. 10Mb)
                </p>
              </div>

              {/* Preview */}
              {previewImage && (
                <div className="mx-3 mb-3 rounded-lg overflow-hidden h-36">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/mp4"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* PLACEMENT */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#99A1AF] uppercase mb-3">
              Placement
            </p>
            <div className="space-y-2.5">
              {["Homepage", "Free Dashboard"].map((place) => (
                <label
                  key={place}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.placement.includes(place)}
                    onChange={() => togglePlacement(place)}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                      formData.placement.includes(place)
                        ? "bg-[#a10fa9] border-[#0FA4A9]"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {formData.placement.includes(place) && (
                      <svg
                        className="w-3 h-3 text-[#a10fa9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{place}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SCHEDULE */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              Schedule
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.scheduleFrom}
                  onChange={(e) =>
                    setFormData({ ...formData, scheduleFrom: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4A9] bg-[#F9F5FE]"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={formData.scheduleTo}
                  onChange={(e) =>
                    setFormData({ ...formData, scheduleTo: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4A9] bg-[#F9F5FE]"
                />
              </div>
            </div>
          </div>

          {/* SETTINGS */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              Settings
            </p>

            {/* Active Status */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Active Status
                </p>
                <p className="text-xs text-gray-400">
                  Enable or disable this banner immediately
                </p>
              </div>
              <Toggle
                checked={formData.isActive}
                onChange={(val) => setFormData({ ...formData, isActive: val })}
              />
            </div>

            {/* Rotation Priority */}
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rotation Priority (1-10)
              </label>
              <input
                type="number"
                min={1}
                max={10}
                value={formData.rotationPriority}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rotationPriority: parseInt(e.target.value),
                  })
                }
                className="w-40 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4A9] bg-[#0D948826]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end pt-6 border-t border-[#9AAEB2]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#0FA4A9] text-white rounded-lg text-sm hover:bg-[#0d9297] transition-colors font-medium"
            >
              {isEdit ? "Update Banner" : "Save Banner"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
