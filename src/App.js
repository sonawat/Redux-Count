import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber ,decNumber } from './Action/action';
function App() {

  const myState = useSelector((state)=>state.changeTheNumber)

  const dispatch = useDispatch();
  return (
    <div>
   <h1>Jai MAta Di</h1>
    
    <button onClick={()=> dispatch(decNumber())}>-</button>
    <span>{myState}</span>
    <button onClick ={()=> dispatch(incNumber())}>+</button>
   </div>
  );
}

export default App;
