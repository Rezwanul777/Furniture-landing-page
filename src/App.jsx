
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'


function App() {
  

  return (
    <ThemeProvider>
      <CartProvider>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/>
    </main>
    <Footer/>
    </CartProvider>
    </ThemeProvider>
  )
}

export default App
