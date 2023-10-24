import './App.css';
import { Products } from './features/products/Products';
import {Cart} from "./features/cart/Cart"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from './features/cart/cartSlice';
function App() {
  const [showCart, setShowCart] = useState(false)
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <div className="App">
      <p onClick={()=> setShowCart(!showCart)} className='cartShow'>Show cart[{items.length}]</p>
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
