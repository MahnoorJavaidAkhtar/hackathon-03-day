
"use client";
import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const client = sanityClient({
  projectId: "bvh4gp9j",
  dataset: "production",
  useCdn: true,
});

type Product = {
  _id: string;
  productName: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  description: string;
  originalPrice: string;
  discountPrice: string;
};

const BestSeller: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch(`*[_type == "product"]`);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
      <div>
        <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
        <h2 className="text-[#252B42] text-[24px] font-bold mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-[14px] mt-2">
          Explore our best sellers and limited-time offers!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 w-full">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg bg-white rounded-lg p-4"
          >
            <div className="relative w-[283px] h-[283px] overflow-hidden rounded-lg">
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={283}
                height={283}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              </div>
            </div>
            <h3 className="text-[#252B42] text-[18px] font-bold mt-4">
              {product.productName}
            </h3>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-[#737373] line-through text-[16px]">
                {product.originalPrice}
              </span>
              <span className="text-[#FF5722] text-[18px] font-bold">
                {product.discountPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;


