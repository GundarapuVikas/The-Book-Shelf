import './App.css';
import { Routes,Route } from 'react-router';
import CartView from './features/Cart/CartView';
import Home from './features/HomePage/Home';
import MyOrdersView from './features/MyOrders/MyOrdersView';
import NavbarView from './features/Navbar/NavbarView';
import BookDetails from './features/BookDetails/BookDetails';
import TitleView from './features/Navbar/TitleView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TitleView/>
          <NavbarView/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/book-details/:bookId' element={<BookDetails/>} />
        <Route path='/my-orders' element={<MyOrdersView/>} />
        <Route path='/cart' element={<CartView/>} />
      </Routes>
    </div>
  )
}

export default App
