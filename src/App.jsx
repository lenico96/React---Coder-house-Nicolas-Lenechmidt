import './components/NavBar/navbar.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';






function App() {
  return (
    <>
      
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/> } />
        <Route path='/categorias/:categoriaId' element={ <ItemListContainer/> } />
        <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
      
    </BrowserRouter>
    </>
    
  );
}

export default App;
