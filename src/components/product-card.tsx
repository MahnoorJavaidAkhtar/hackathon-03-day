// export default ProductCard;
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export interface Product {
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    }
  };
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product.image, "Product Image"); // Debugging log

  return (
    <div className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
      <div className="w-[283px] h-[283px] overflow-hidden"> {/* Fixed container */}
  <Image
    src={urlFor(product.image.asset._ref).url()}
    alt={product.name}
    width={283}
    height={283}
    className="w-full h-full object-cover" // This ensures proper scaling
  />
</div>

      <div className="mt-4 text-center">
        <h3 className="text-[#252B42] text-[16px] font-bold">{product.name}</h3>
        <p className="text-[#737373] text-[14px]">{product.department}</p>
        <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
          {product.originalPrice}{" "}
          <span className="text-[#23856D]">{product.discountedPrice}</span>
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <div key={index} className={`w-4 h-4 ${color} rounded-full`} />
          ))}
        </div>
      </div>
    </div>
  );
};



