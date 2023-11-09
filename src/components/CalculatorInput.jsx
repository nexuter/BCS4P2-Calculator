import { useState } from "react";

function CalculatorInput({ result, setResult }) {
  function onChangeResult(e) {
    setResult(e.target.value);
  }

  return (
    <input
      className="py-4 px-8 text-2xl w-full rounded-xl text-right"
      type="text"
      value={result}
      onChange={onChangeResult}
    />
  );
}

export default CalculatorInput;
