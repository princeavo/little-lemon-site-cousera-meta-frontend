import React from 'react'
import img from '../images/restauranfood.jpg'
import deliveryImg from '../images/delivery.png'

export default function Specials() {
  return (
    <section className="specials-section">
      <div className="flex-center-between">
        <h2>This weeks specials!</h2>
        <a href="/" className='btn primary'>Online Menu</a>
      </div>
      <div className="specials flex-center-center specials">
        <div className="special">
          <img src={img} alt="" />
          <div className='special-infos flex-center-between'>
            <h4>Greet salad</h4>
            <span className="price">$12.99</span>
          </div>
          <p className="short-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere molestias quis ex repudiandae ducimus enim, laudantium nobis omnis perspiciatis, dolore at magni ab praesentium!
          </p>
          <p className="order-delevery">Order a delivery 20 <img src={deliveryImg} alt="" /></p>
        </div>
        <div className="special">
          <img src={img} alt="" />
          <div className='special-infos flex-center-between'>
            <h4>Greet salad</h4>
            <span className="price">$12.99</span>
          </div>
          <p className="short-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere molestias quis ex repudiandae ducimus enim, laudantium nobis omnis perspiciatis, dolore at magni ab praesentium!
          </p>
          <p className="order-delevery">Order a delivery 20 <img src={deliveryImg} alt="" /></p>
        </div>
        <div className="special">
          <img src={img} alt="" />
          <div className='special-infos flex-center-between'>
            <h4>Greet salad</h4>
            <span className="price">$12.99</span>
          </div>
          <p className="short-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio facere molestias quis ex repudiandae ducimus enim, laudantium nobis omnis perspiciatis, dolore at magni ab praesentium!
          </p>
          <p className="order-delevery">Order a delivery 20 <img src={deliveryImg} alt="" /></p>
        </div>
      </div>
    </section>
  )
}
