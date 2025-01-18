"use client"
import { useEffect, useState } from "react";
 // Import the sanity client
import { Product } from "@/app/type"; // Adjust path as per your folder structure.
import { ProductCard } from "@/components/product-card";
import client from "@/sanity/lib/client";

const Cards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Sanity on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "featuredProduct"] {
            image,
            name,
            department,
            originalPrice,
            discountedPrice,
            colors
          }
        `);
        console.log(data)

        setProducts(data);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-5 mb-7 overflow-x-hidden w-full">
      {/* Product Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full px-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={{
            ...product,
            image: { asset: { _ref: product.image, _type: 'reference' } }
          }} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center space-x-4 mt-16 border-[#BDBDBD] border rounded-md px-4 py-2">
        <button
          className="px-4 py-2 bg-[#F3F3F3] text-[#BDBDBD] rounded-md hover:bg-gray-300 text-sm sm:px-8 sm:py-6"
          aria-label="First page"
        >
          First
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <button
            className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6"
            aria-label="Page 1"
          >
            1
          </button>
          <button
            className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6"
            aria-label="Page 2"
          >
            2
          </button>
          <button
            className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6"
            aria-label="Page 3"
          >
            3
          </button>
        </div>

        <button
          className="px-4 py-2 text-[#23A6F0] rounded-md hover:bg-[#1D8CC8] hover:text-white text-sm sm:px-8 sm:py-6"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;







