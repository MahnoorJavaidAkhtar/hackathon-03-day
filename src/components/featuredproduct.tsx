"use client"
import { Product } from "@/components/product-card";
import { ProductCard } from "@/components/product-card";
import client from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const FeatureProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "featuredProduct"]{
        image,
        name,
        department,
        originalPrice,
        discountedPrice,
        colors
      }`;
      
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
      <div>
        <h2 className="text-[#252B42] text-[40px] font-bold">Featured Products</h2>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>Loading featured products...</p>
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
