"use client";

import SearchInput from "./SearchInput";
import TopLinks from "./TopLinks";

export default function SearchHeader({count}: {count: number}) {
    return (
        <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
            <TopLinks text="Search Results" />
            <SearchInput  count={count} />
        </div>
        </div>
    );
}