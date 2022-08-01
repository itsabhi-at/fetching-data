import React from "react";
import { useSelector, useDispatch } from "react-redux";
import increment from "./dispatch/counter";
import loggedin from "./dispatch/logged";


function App() {
  const counter = useSelector((store) => store.counter);
  const logged = useSelector((store) => store.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())} >Increment</button>

      <button onClick={() => dispatch(loggedin())}>logged
        {logged ? <span> IN</span> : <span> OUT</span>}
      </button>
    </div>
  );
}

export default App;
