import "./cart.css"
import { useEffect } from "react";
import { fetchAsync, deleteAsync, updateAsync } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./cartSlice";
export function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  const handleChange = (e, id) => {
    dispatch(updateAsync({id, change: {quantity: +e.target.value}}))
  }
  const items = useSelector((state) => state.cart.items);
  
  return (
    <div>
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img className="img-fluid" src={item.thumbnail} alt={item.title} />
          <div className="description">
            <p>{item.title}</p>
            <span>{item.brand}</span>
            <strong>${item.price}</strong>
          </div>
          <div className="quantity">
            <p onClick={()=> dispatch(decrement(item))}>-</p>
            Quantity
            <p onClick={()=> dispatch(increment(item))}>+</p>
            <select value={item.quantity} onChange={(e)=> handleChange(e, item.id)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="close">
            <button onClick={()=> dispatch(deleteAsync(item.id))}>X</button>
          </div>
        </div>
      ))}
      <h1>Total: ${items.reduce((acc, current)=> current.price*current.quantity+ acc,0)}</h1>
    </div>
  );
}
