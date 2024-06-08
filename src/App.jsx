import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./store/counterSlice"


function App() {

  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  
  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  const onReset = () => {
    dispatch(reset())
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Subtract</button>
      <button onClick={onReset}>Reset</button>
    </>
  )
}

export default App
