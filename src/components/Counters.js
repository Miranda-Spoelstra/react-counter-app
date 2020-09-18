import React from "react";
import Counter from "./Counter";

// stateless functional component
const Counters = (props) => {
  // console.log("Counters - Rendered");
  const { onReset, counters, onDelete, onIncrement, onDecrement } = props;

  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Counters;
