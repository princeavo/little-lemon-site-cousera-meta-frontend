import React from 'react'
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='flex-top-between'>
            <img alt='Little Lemon logo' src={logo} />
            <div className='doormat-navigation'>
                <h3>Doomat Navigation</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='/'>Reservations</Link></li>
                    <li><Link to='/'>Order Online</Link></li>
                    <li><Link to='/'>Login</Link></li>
                </ul>
            </div>
            <div className='contact-info'>
                <h3>Contact</h3>
                <div>
                    Adress
                </div>
                <div>
                    Phone number
                </div>
                <div>
                    Email
                </div>
            </div>
            <div className='social-media-links'>
                <h3>Social media links</h3>
                <div>
                    Adress
                </div>
                <div>
                    Phone number
                </div>
                <div>
                    Email
                </div>
            </div>
        </footer>
    )
}
