// 'use client'

// import { useEffect, useState } from 'react'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import Image from 'next/image'

// interface ProductDetails {
//   _id: string
//   name: string
//   department: string
//   originalPrice: string
//   discountedPrice: string
//   colors: string[]
//   description: string
//   image: any
// }

// export default function ProductDetails({ params }: { params: { id: string } }) {
//   const [product, setProduct] = useState<ProductDetails | null>(null)
//   const [selectedColor, setSelectedColor] = useState<string>('')

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await client.fetch(`*[_type == "featuredProduct" && _id == $id][0]`, {
//         id: params.id
//       })
//       setProduct(data)
//     }

//     fetchProduct()
//   }, [params.id])

//   if (!product) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="relative h-[500px] rounded-lg overflow-hidden">
//           <Image
//             src={urlFor(product.image).url()}
//             alt={product.name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold text-[#252B42]">{product.name}</h1>
//           <p className="text-[#737373]">{product.department}</p>
          
//           <div className="flex gap-4 items-center">
//             <span className="text-2xl font-bold text-[#252B42]">{product.discountedPrice}</span>
//             <span className="text-lg line-through text-[#BDBDBD]">{product.originalPrice}</span>
//           </div>

//           {/* Color Selection */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Select Color</h3>
//             <div className="flex gap-3">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color ? 'border-blue-500' : 'border-transparent'
//                   }`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Description</h3>
//             <p className="text-[#737373]">{product.description}</p>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md hover:bg-blue-600 transition-colors">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
