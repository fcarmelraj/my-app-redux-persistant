import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../CreateSlice/counterSlice';
const CounterComponent = () =>{
    const count = useSelector((state)=>state.counter);
    const dispatch = useDispatch()
    // console.log('count>>>',count)
    const incrementFunc = () => {
        dispatch(increment())
    }

    const decrementFunc = () => {
        dispatch(decrement())
    }

    return(<div>
        <h2>Counter</h2>
        <h2>{count.count}</h2>
        <button onClick={incrementFunc}>Incremert</button>
        <button onClick={decrementFunc}>Decrement</button>
    </div>)
}

export default CounterComponent;