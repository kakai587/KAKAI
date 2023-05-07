import { useState } from "react";

const ConditionalRendering = () => {
  const [display,setDisplay] = useState(false);
  let output;

  if (display) {
    return (
      <div>
        <h1>display is true hence this line is displayed</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>display is false</h1>
      </div>
    );
  }

  // conditional rendering using elements
  if (display){
    output = <h1>display is true hence this line is displayed</h1>;
  } else {
    output = <h1>display is false</h1>;
  }

  return output;




  return display ? (
    <div>
      <h1>display is true hence this line is displayed</h1>
    </div>
  ) : (
    <div>
      <h1>display is false</h1>
    </div>
  );
};

export default ConditionalRendering;
