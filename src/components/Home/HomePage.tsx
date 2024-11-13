import React from 'react'
import Hero from './Hero'
import Logoticker from '../Stable/Logoticker'
import OurCompany from './OurCompany'
import CardsHover from './CardsHover'
import ServicesCards from './ServicesCards'
import ProductRequirement from './ProductRequirement'
import HowFullStack from './HowFullStack'
import Testimonials from './Testimonials'
import FAQs from './FAQs'
import BlogHome from './BlogHome'

const HomePage = async () => {

  return (
    <div>
      <Hero />
      <Logoticker  />
      <OurCompany />
      <CardsHover />
      <ServicesCards />
      <ProductRequirement />
      <HowFullStack />
      <FAQs />
      <Testimonials />
      <BlogHome />
    </div>
  )
}

export default HomePage