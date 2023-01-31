import './components/NavBar/navbar.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CartProvider from './context/CartContext';


function App() {
  return (
    <>
      
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categorias/:categoriaId' element={ <ItemListContainer/> } />
        <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
      </CartProvider>
    
      
    </BrowserRouter>
    </>
    
  );
}

export default App;
