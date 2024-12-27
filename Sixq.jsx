import React,{ useState } from 'react'


function Sixq(){
    // Initialize state with a count value of 0
    const [count, setCount] = useState(0);
  
    // Function to increment the count ,no.+1 hoga
    const incr = () => {
      setCount(count + 1);
    };
   
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <button onClick={incr}>
          Increment
        </button>
      </div>
    );
  }
   
export default Sixq
