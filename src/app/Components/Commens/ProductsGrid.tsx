"use client";

import { Product, Products } from "@/types/productInterface";
import { useEffect, useState } from "react";
import SearchLoading from "./SearchLoading";
import EmptySearch from "./EmptySearch";
import { SearchPagination } from "./SearchPagination";
import ProductItem from "./ProductItem";
import { MetaData } from "@/types/metaData";
import { getProducts } from "@/actions/getFIlterProducts";
import { SearchParams } from "@/app/search/page";

interface ProductsGridProps {
    params: SearchParams;
}

export default function ProductsGrid({ params }: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState<MetaData | undefined>(undefined);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const hasParams = Object.values(params || {}).some(Boolean);
      const payload: Products = await getProducts(hasParams ? {...params , limit: 12} : {limit: 12});
      setProducts(payload.data);
      setMetadata(payload.metadata);
      setLoading(false);
    }

    fetchProducts();
  }, [params]);

  if (loading) return <SearchLoading />;

  return (
    <>
      {products?.length === 0 ? (
        <EmptySearch />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      )}
      {metadata && (
        <SearchPagination
          totalPages={metadata.numberOfPages}
          currentPage={metadata.currentPage}
        />
      )}
    </>
  );
}