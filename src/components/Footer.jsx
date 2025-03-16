import React from 'react'
import logo from '../images/Logo.svg'

export default function Footer() {
    return (
        <footer className='flex-top-between'>
            <img alt='Little Lemon logo' src={logo} />
            <div className='doormat-navigation'>
                <h3>Doomat Navigation</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
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
