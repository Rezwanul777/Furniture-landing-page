
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/>
    </main>
     <h1>Footer</h1>
    </>
  )
}

export default App
