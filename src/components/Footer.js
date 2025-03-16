import React from 'react'
import logo from '../images/Logo.svg'

export default function Footer() {
    return (
        <footer>
            <img alt='Little Lemon logo' src={logo} />
            <div className='doormat-navigation'>
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
