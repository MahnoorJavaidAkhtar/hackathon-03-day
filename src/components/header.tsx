"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#252B42] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>mahnoorjavaid342@gmail.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link
            href="https://www.instagram.com/mahnoor._.javaid45"
            aria-label="Instagram"
            className="text-[#23A6F0] hover:opacity-75"
            target="_blank"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
            <Link
            href="https://github.com/MahnoorJavaidAkhtar"
            aria-label="GitHub"
            className="text-[#23A6F0] hover:opacity-75"
            target="_blank"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
            <Link
            href="https://www.linkedin.com/in/mahnoor-javaid-a9687a283"
            aria-label="LinkedIn"
            className="text-[#23A6F0] hover:opacity-75"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

          {/* Action Icons (Mobile and Desktop) */}
          <div className="flex items-center gap-4 md:hidden">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="/" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/shop"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#23A6F0] transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#23A6F0] transition-all">
                  Team
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg cursor-pointer" />
            <FiShoppingCart className="text-lg cursor-pointer" />
            <FiHeart className="text-lg cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#23A6F0] transition-all">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import {
//   FiPhone,
//   FiMail,
//   FiInstagram,
//   FiYoutube,
//   FiFacebook,
//   FiTwitter,
//   FiSearch,
//   FiShoppingCart,
//   FiHeart,
//   FiChevronDown,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";

// interface Product {
//   name: string;
//   department: string;
//   image: {
//     asset: {
//       _ref: string;
//       _type: 'reference';
//     }
//   };
//   originalPrice: string;
//   discountedPrice: string;
//   colors: string[];
// }
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredResults, setFilteredResults] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "featuredProduct" || _type == "product"]{
//         name,
//         department,
//         image,
//         originalPrice,
//         discountedPrice,
//         colors
//       }`;
//       const fetchedProducts = await client.fetch(query);
//       setProducts(fetchedProducts);
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (term) {
//       const results = products.filter((product) =>
//         product.name.toLowerCase().includes(term) || 
//         product.department.toLowerCase().includes(term)
//       );
//       setFilteredResults(results);
//     } else {
//       setFilteredResults([]);
//     }
//   };
//   {searchTerm && filteredResults.length > 0 && (
//     <div className="absolute top-12 bg-white shadow-lg rounded-lg w-80 max-h-60 overflow-y-auto z-50">
//       {filteredResults.map((product, index) => (
//         <Link
//           key={index}
//           href={`/product/${product.name}`}
//           className="block p-2 hover:bg-gray-100"
//         >
//           <div className="flex items-center gap-2">
//             <span className="font-medium">{product.name}</span>
//             <span className="text-sm text-gray-500">- {product.department}</span>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )}
  


//   return (
//     <div className="overflow-x-hidden">
//       {/* Header Section */}
//       <div className="bg-[#252B42] py-4 hidden lg:block">
//         <div className="container mx-auto flex justify-between items-center text-white text-sm">
//           {/* Contact Information */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-1">
//               <FiPhone />
//               <p>(225) 555-0118</p>
//             </div>
//             <div className="flex items-center gap-1">
//               <FiMail />
//               <p>mahnoorjavaid342@gmail.com</p>
//             </div>
//           </div>

//           {/* Promotion */}
//           <p className="hidden md:block">
//             Follow Us and get a chance to win 80% off
//           </p>

//           {/* Social Media Links */}
//           <div className="flex items-center gap-4">
//             <p className="hidden md:block">Follow Us:</p>
//             <Link href="https://www.instagram.com" target="_blank">
//               <FiInstagram />
//             </Link>
//             <Link href="https://www.youtube.com" target="_blank">
//               <FiYoutube />
//             </Link>
//             <Link href="https://www.facebook.com" target="_blank">
//               <FiFacebook />
//             </Link>
//             <Link href="https://www.twitter.com" target="_blank">
//               <FiTwitter />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Navbar Section */}
//       <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
//         <div className="container mx-auto flex items-center justify-between py-4">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

//           {/* Search Functionality */}
//           <div className="relative hidden md:block">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="border rounded-full px-4 py-2 text-sm w-80"
//             />
//             <FiSearch className="absolute right-4 top-3 text-lg text-[#252B42]" />
//             {/* Display Search Results */}
//             {searchTerm && filteredResults.length > 0 && (
//               <div className="absolute top-12 bg-white shadow-lg rounded-lg w-80 max-h-60 overflow-y-auto z-50">
//                 {filteredResults.map((product, index) => (
//                   <Link
//                     key={index}
//                     href={product.link || '#'}
//                     className="block p-2 hover:bg-gray-100"
//                   >
//                     {product.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//             {searchTerm && filteredResults.length === 0 && (
//               <div className="absolute top-12 bg-white shadow-lg rounded-lg w-80 p-2 text-gray-500 text-sm">
//                 No results found.
//               </div>
//             )}
//           </div>

//           {/* Action Icons */}
//           <div className="flex items-center gap-4 md:hidden">
//             <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
//             <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <FiX className="text-3xl text-[#252B42]" />
//               ) : (
//                 <FiMenu className="text-3xl text-[#252B42]" />
//               )}
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <nav className="hidden md:flex">
//             <ul className="flex gap-8 text-sm font-medium text-[#737373]">
//               <li>
//                 <Link href="/" className="hover:text-[#23A6F0] transition-all">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shop"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   Shop
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/product"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   Product
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="hover:text-[#23A6F0] transition-all"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };export default Header;



