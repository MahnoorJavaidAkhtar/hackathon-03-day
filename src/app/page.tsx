import Header from "@/components/header";
import Hero from "@/components/hero";
import EditorsPics from "@/components/editors-pics";
import FeaturedProduct from "@/components/featuredproduct";
import FeauresPosts from "@/components/feaures-posts";
import Footer from "@/components/footer";





export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <EditorsPics/>
      <FeaturedProduct/>
      <FeauresPosts/>
      <Footer/>
      {/* <ProductCard product={undefined}/> */}
    </>
  );
}