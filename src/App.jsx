import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationContext'


const App = () => {
  // const [render, setRender] = useState(0)

  return (
    <>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            {/* <button onClick={() => setRender(prev => prev + 1)}>re-render</button> */}
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </>
  )
}

export default App