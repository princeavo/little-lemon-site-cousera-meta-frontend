import React from 'react'
import Chicago from './Chicago'
import ChicagoImage from '../images/restauranfood.jpg'
import ChicagoImage2 from '../images/chicago2.jpg'
import Specials from './Specials'
import Testimonials from './Testimonials'

export default function Main() {
  return (
    <main>
      <Chicago image={ChicagoImage}></Chicago>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <Chicago image={ChicagoImage2}></Chicago>
    </main>
  )
}
