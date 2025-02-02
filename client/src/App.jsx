import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/css/market.css'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import Login from './Layouts/Login'
import SignUp from './Layouts/SignUp'
import Layout from './Layouts/Layout'
import Product from './components/Product'

function App() {


  return (
    <>
      <Layout>
        <Product>
          
        </Product>
      </Layout>
    </>
  )
}

export default App
