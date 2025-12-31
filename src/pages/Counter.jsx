import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("added Value", counter);

    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      return;
    }
  }

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
  
      <h3>Counter Value: {counter}</h3>
  
      <button onClick={addValue}>Add value {counter} </button>
      <br />
      <button onClick={subValue}>remove value {counter} </button>
    </>
  );
}



export default Counter;
