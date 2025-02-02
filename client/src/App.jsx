import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import Login from './Layouts/Login'
import SignUp from './Layouts/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Login/>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default App
