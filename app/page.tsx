import About from '@/src/component/About'
import Banner from '@/src/component/Banner'
import Cards from '@/src/component/Cards'
import Footer from '@/src/component/Footer'
import Form from '@/src/component/Form'
import Home from '@/src/component/Home'
import Investments from '@/src/component/Investments'
import Product from '@/src/component/Product'
import WhySoupX from '@/src/component/WhySoupX'
import React from 'react'

const page = () => {
  return (
    <div>
    <Banner/>
    <Home/>
    <Product/>
    <About/>
    <WhySoupX/>
    <Cards/>
    <Investments/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default page
