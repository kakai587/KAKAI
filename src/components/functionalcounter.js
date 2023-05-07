import { useState } from 'react';

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>The counter value is: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalCounter;
