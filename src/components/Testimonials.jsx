import React from 'react'
import startImage from '../images/start.png'
import testImg1 from '../images/testi1.png'
import testImg2 from '../images/testi2.png'
import testImg3 from '../images/testi4.png'
import testImg4 from '../images/testi5.png'

export default function Testimonials() {
    return (
        <section className='testimonial-section'>
            <h2>Testimonial</h2>
            <div className="testimonials flex-center-center">
                <Testimonial image={testImg1} rating={4} name="Lorem husdihius" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, pariatur?"></Testimonial>
                <Testimonial image={testImg2} rating={4} name="Lorem husdihius" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, pariatur?"></Testimonial>
                <Testimonial image={testImg3} rating={4} name="Lorem husdihius" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, pariatur?"></Testimonial>
                <Testimonial image={testImg4} rating={4} name="Lorem husdihius" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, pariatur?"></Testimonial>
            </div>
        </section>
    )
}

const Testimonial = ({ rating, image, name, review }) => {
    return (
        <div className="testimonial">
            <div className='flex-center-center'>
                {rating} <img src={startImage} className='startImage' alt="" />
            </div>
            <div className='flex-center-center imgBox'>
                <img src={image} className='reviewerImage' alt="" />
                {name}
            </div>
            <div className="review">
                {review}
            </div>
        </div>
    )
}