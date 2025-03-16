import React from 'react'
import restaurantFoodImage from '../images/restauranfood.jpg'

export default function Chicago() {
    return (
        <section className='chicago-section flex-center-between'>
            <div>
                <h2>Little Lemon</h2>
                <p className='name'>Chicago</p>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam, veritatis exercitationem quia natus est, eum cum doloremque quam ratione totam quisquam placeat voluptas consequuntur quis nobis doloribus praesentium ipsa?
                </p>
                <a href="/" className='btn primary'>Reserve a table</a>
            </div>
            <img src={restaurantFoodImage} alt="" />
        </section>
    )
}
