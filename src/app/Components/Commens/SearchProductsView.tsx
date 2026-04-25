"use client";

import ProductsGrid from "./ProductsGrid";
import { SearchParams } from "@/app/search/page";
import { useState } from "react";
import ProductToolbar from "./ProductToolbar";
import ActiveFilters from "./ActiveFilters";
import { Category } from "@/types/categories";
import { Brand } from "@/types/brand";

export default function SearchProductsView({
    categories,
    brands,
    params,
    }: {
    categories: Category[];
    brands: Brand[];
    params: SearchParams;
    }) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    return (
        <div className="flex-1">
        <ProductToolbar viewMode={viewMode} setViewMode={setViewMode} />
        <ActiveFilters categories={categories} brands={brands} />
        <ProductsGrid viewMode={viewMode} params={params} />
        </div>
    );
    }