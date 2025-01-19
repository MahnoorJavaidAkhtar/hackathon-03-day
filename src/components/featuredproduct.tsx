// "use client"
// import { Product } from "@/components/product-card";
// import { ProductCard } from "@/components/product-card";
// import client from "@/sanity/lib/client";
// import { useEffect, useState } from "react";

// const FeatureProducts: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "featuredProduct"]{
//         image,
//         name,
//         department,
//         originalPrice,
//         discountedPrice,
//         colors
//       }`;
      
//       const fetchedProducts = await client.fetch(query);
//       setProducts(fetchedProducts);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
//       <div>
//         <h2 className="text-[#252B42] text-[40px] font-bold">Featured Products</h2>

//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
//         {products.length > 0 ? (
//           products.map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))
//         ) : (
//           <p>Loading featured products...</p>
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default FeatureProducts;
"use client"
import { Product } from "@/components/product-card";
import { ProductCard } from "@/components/product-card";
import client from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// New Section Component
const ProductShowcase: React.FC = () => (
  <>
    {/* First Product Section */}
    <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-16 pt-7 flex items-center justify-between flex-col md:flex-row">
      {/* Text Section */}
      <div className="text-white space-y-4 ml-4 sm:ml-12 md:ml-36 text-center sm:text-left">
        <h3 className="text-[20px]">SUMMER 2020</h3>
        <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold">
          Vita Classic <br /> <span>Product</span>
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          We know how large objects will act, We know <br />
          <span>how objects will act, We know</span>
        </p>

        {/* Price and Button Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
          <h3 className="text-[24px] font-bold">{`$16.48`}</h3>
          {/* <button className="text-[14px] font-bold bg-[#2DC071] py-4 px-10 rounded-md hover:bg-green-600 mt-4 sm:mt-0">
              Shop Now
          </button> */}
           <Link
          href="/shop"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all"
        >
          SHOP NOW
        </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-[400px] md:w-[510px] flex-shrink-0">
        <Image
          src={"/classic.png"}
          alt="classic"
          width={510}
          height={685}
          className="w-full object-cover"
        />
      </div>
    </div>

    {/* Second Product Section */}
    <div className="flex items-center justify-between mt-16 flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-auto">
        <Image
          src={"/universe.png"}
          alt="universe"
          height={704}
          width={682}
          className="w-full"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left w-full md:w-auto mt-6 md:mt-0">
        <h3 className="text-[#BDBDBD] font-bold text-[16px]">SUMMER 2020</h3>
        <h2 className="text-[#252B42] font-bold text-[30px] sm:text-[40px] mt-8">
          Part of the Neural <br /> Universe
        </h2>
        <p className="text-[#737373] text-[14px] sm:text-[20px] mt-7">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <div className="flex gap-5 mt-5 justify-center md:justify-start">
        <Link
          href="/product"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all"
        >
          BUY NOW
        </Link>
        </div>
      </div>
    </div>
  </>
);

// Main Featured Products Component
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
      {/* Featured Products Header */}
      <div>
        <h2 className="text-[#252B42] text-[40px] font-bold">Featured Products</h2>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>Loading featured products...</p>
        )}
      </div>

      {/* Add the Product Showcase Section Below */}
      <ProductShowcase />
    </div>
  );
};

export default FeatureProducts;

