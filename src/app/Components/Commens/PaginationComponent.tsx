"use client"
import React, { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
export default function PaginationComponent() {
    const [currentPage, setCurrentPage] = useState(1);

    const pages = [1, 2, 3, 4, 5];
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pages.length;
    return (
        <>
            <Pagination>
                <PaginationContent>

                    <PaginationItem>
                    <PaginationLink
                        onClick={() =>
                        !isFirstPage &&
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className={`cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center font-medium border border-gray-200 transition-colors
                        ${
                        isFirstPage
                            ? "opacity-50 pointer-events-none text-gray-400"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        {"<"}
                    </PaginationLink>
                    </PaginationItem>

                    {pages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        className={
                            currentPage === page
                            ? "cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors bg-green-600 text-white"
                            : "cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }
                        >
                        {page}
                        </PaginationLink>
                    </PaginationItem>
                    ))}

                    <PaginationItem>
                    <PaginationLink
                        onClick={() =>
                        !isLastPage &&
                        setCurrentPage((prev) =>
                            Math.min(prev + 1, pages.length)
                        )
                        }
                        className={`cursor-pointer w-10 h-10 rounded-lg flex items-center justify-center font-medium border border-gray-200 transition-colors
                        ${
                        isLastPage
                            ? "opacity-50 pointer-events-none text-gray-400"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        {">"}
                    </PaginationLink>
                    </PaginationItem>

                </PaginationContent>
                </Pagination>
        </>
    )
}
