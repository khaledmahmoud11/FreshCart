"use client";
import { FaGripVertical, FaListUl } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import SortProducts from "./SortProducts";

export default function ProductToolbar() {
  return (
    <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
      <div className="flex items-center gap-4">
        <button className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
          <FaSliders />
          Filters
        </button>
        <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1">
          <button className="p-2 rounded-md transition-colors bg-green-600 text-white">
            <FaGripVertical />
          </button>
          <button className="p-2 rounded-md transition-colors text-gray-500 hover:text-gray-700">
            <FaListUl />
          </button>
        </div>
      </div>
      <SortProducts />
    </div>
  );
}