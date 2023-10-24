import { useEffect } from "react";
import { addAsync } from "../cart/cartSlice";
import "./Products.css";
import { fetchAsync } from "./productsSlice";
import { useSelector, useDispatch } from "react-redux";
export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(()=>{
    dispatch(fetchAsync())
  },[])
  return (
    <div>
      {/* <button onClick={() => dispatch(fetchAsync())}>Fetch Products</button> */}
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={() => dispatch(addAsync(product))}>Add to Cart</button>
          </p>
        </div>
      ))}
    </div>
  );
}
