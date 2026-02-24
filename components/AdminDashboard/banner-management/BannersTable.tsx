"use client";

import { useState } from "react";
import {
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Edit,
} from "lucide-react";
import { Banner, MOCK_BANNERS } from "./data";
interface BannersTableProps {
  onEdit: (banner: Banner) => void;
}
export default function BannersTable({ onEdit }: BannersTableProps) {
  const [banners, setBanners] = useState<Banner[]>(MOCK_BANNERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [placementFilter, setPlacementFilter] = useState("All Placement");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredBanners = banners.filter((banner) => {
    const matchesSearch = banner.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "All Statuses" || banner.status === statusFilter;
    const matchesPlacement =
      placementFilter === "All Placement" ||
      banner.placement.includes(placementFilter);
    return matchesSearch && matchesStatus && matchesPlacement;
  });

  const totalPages = Math.ceil(filteredBanners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBanners = filteredBanners.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const toggleBannerStatus = (id: number) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === id ? { ...banner, isEnabled: !banner.isEnabled } : banner,
      ),
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "text-[#22C55E]";
      case "INACTIVE":
        return "text-[#E31D48]";
      case "EXPIRED":
        return "text-[#9AAEB2]";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Search and Filters */}
      <div className="flex gap-4 items-center">
        <div className="w-full md:w-1/2 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search banners by title..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 outline-none text-sm"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#5F6F73] flex justify-end gap-4">
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm outline-none cursor-pointer "
          >
            <option>All Statuses</option>
            <option>ACTIVE</option>
            <option>INACTIVE</option>
            <option>EXPIRED</option>
          </select>
          <select
            value={placementFilter}
            onChange={(e) => {
              setPlacementFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm outline-none cursor-pointer"
          >
            <option>All Placement</option>
            <option>Home Page</option>
            <option>Free Dashboard</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                PREVIEW
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                BANNER DETAILS
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                PLACEMENT
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                SCHEDULE
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                STATUS
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBanners.map((banner, index) => (
              <tr
                key={banner.id}
                className={`border-b border-[#9AAEB2] bg-white`}
              >
                {/* Preview */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-400 text-lg">⋮⋮</div>
                    <div className="w-25 h-12.5">
                      <img
                        src={banner.preview}
                        alt={banner.title}
                        className="w-full h-full rounded object-cover"
                      />
                    </div>
                  </div>
                </td>

                {/* Banner Details */}
                <td className="px-6 py-4">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{banner.title}</p>
                    <span
                      className={`inline-block px-3 py-1 rounded text-base font-regular bg-[#0FA4A91A] text-black border border-[#0D9488]`}
                    >
                      {banner.type}
                    </span>
                  </div>
                </td>

                {/* Placement */}
                <td className="px-6 py-4">
                  <div className="flex flex-col w-fit gap-2">
                    {banner.placement.map((place) => (
                      <span
                        key={place}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#5E5E5E1A] text-[#5E5E5E] border border-[#5E5E5E] rounded-lg text-base font-medium"
                      >
                        <Layers /> {place}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Schedule */}
                <td className="px-6 py-4 text-base text-[#5E5E5E]">
                  <div>FROM {banner.scheduleFrom}</div>
                  <div>TO {banner.scheduleTo}</div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`font-semibold text-base ${getStatusColor(banner.status)}`}
                  >
                    {banner.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggleBannerStatus(banner.id)}
                      className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                        banner.isEnabled ? "bg-[#0FA4A9]" : "bg-[#9AAEB2]"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 rounded-full bg-white transition-transform ${
                          banner.isEnabled ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </button>

                    {/* Edit Button */}
                    <button
                      onClick={() => onEdit(banner)}
                      className="p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <Edit size={18} />
                    </button>

                    {/* Delete Button */}
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-teal-600 font-semibold">
          SHOWING {paginatedBanners.length} OF {filteredBanners.length}
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 bg-[#8746E7] text-white rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
