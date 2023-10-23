import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";
function Reward() {

  const points = useSelector(state=>state.reward.points)
  const dispatch = useDispatch()
 

  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Reward Component</b>
          </h4>
          {/* <h3>Amount : ${amount}</h3> */}
          <h3>Total point : {points}</h3>
          
          <button onClick={()=>dispatch(incrementByAmount(10))}>Increment +</button>
        </div>
      </div>
  );
}

export default Reward;
