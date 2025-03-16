import React from 'react'
import { Link } from 'react-router-dom'

export default function Chicago({image}) {
    return (
        <section className='chicago-section flex-center-between'>
            <div>
                <h2>Little Lemon</h2>
                <p className='name'>Chicago</p>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam, veritatis exercitationem quia natus est, eum cum doloremque quam ratione totam quisquam placeat voluptas consequuntur quis nobis doloribus praesentium ipsa?
                </p>
                <Link to="/booking-table" className='btn primary'>Reserve a table</Link>
            </div>
            <img src={image} alt="" />
        </section>
    )
}
