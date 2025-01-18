import Header from '@/components/shop-components/header'
import Hero from '@/components/shop-components/hero'
import Company from '@/components/shop-components/company'
import Cards from '@/components/shop-components/cards'
import Footer from '@/components/footer'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Company/>
        <Cards/>
        <Footer />
    </div>
  )
}

export default ProductPage