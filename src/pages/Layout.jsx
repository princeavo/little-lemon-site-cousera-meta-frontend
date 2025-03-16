import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css'


export default function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}
