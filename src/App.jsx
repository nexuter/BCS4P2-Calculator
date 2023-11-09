import { useState } from "react";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorNumButton from "./components/CalculatorNumButton";
import CalculatorDelButton from "./components/CalculatorDelButton";

function App() {
  const [result, setResult] = useState("0");

  return (
    <main className="bg-pink-100 min-h-screen flex justify-center items-center">
      <form
        className="bg-gray-300 px-8 py-12 rounded-lg shadow-lg"
        onClick={(e) => e.preventDefault()}
      >
        <CalculatorInput result={result} setResult={setResult} />

        <div className="grid grid-cols-5 mt-8 gap-4">
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={7}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={8}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={9}
          />
          <button className="button-style">÷</button>
          <CalculatorDelButton result={result} setResult={setResult} />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={4}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={5}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={6}
          />
          <button className="button-style">×</button>
          <button className="button-style">±</button>
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={1}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={2}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={3}
          />
          <button className="button-style">-</button>
          <button className="button-style">%</button>
          <button className="button-style">AC</button>
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={0}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={"."}
          />
          <button className="button-style">+</button>
          <button className="button-style">=</button>
        </div>
      </form>
    </main>
  );
}

export default App;
