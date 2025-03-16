import React from 'react'
import logo from '../images/Logo.svg'
import Nav from './Nav'

export default function Header() {
  return (
    <header>
      <img alt='Little Lemon logo'  src={logo}/>
      <Nav></Nav>
    </header>
  )
}
