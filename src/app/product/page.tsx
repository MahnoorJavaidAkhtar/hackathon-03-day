import Header from '@/components/product-component/header'
import Herosection from "@/components/product-component/herosection"
import BestSeller from '@/components/product-component/bestseller'
import Footer from '@/components/product-component/footer'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <Header/>
        <Herosection/>
        <BestSeller/>
        <Footer/>
    </div>
  )
}

export default ProductPage