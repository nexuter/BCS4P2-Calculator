import { useState } from "react";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorNumButton from "./components/CalculatorNumButton";
import CalculatorDelButton from "./components/CalculatorDelButton";
import CalculatorEqualButton from "./components/CalculatorEqualButton";
import CalculatorOpButton from "./components/CalculatorOpButton";
import CalculatorClearButton from "./components/CalculatorClearButton";
import CalculatorPlusMinusButton from "./components/CalculatorPlusMinusButton";
import CalculatorPercentButton from "./components/CalculatorPercentButton";

function App() {
  const [result, setResult] = useState("0");
  const [operand, setOperand] = useState(0);
  const [op, setOp] = useState();
  const [operated, setOperated] = useState(false);
  const [updateop, setUpdateOp] = useState(false);
  const [prevop, setPrevOp] = useState();
  const [keying, setKeying] = useState(false);

  return (
    <main className="bg-pink-100 min-h-screen flex justify-center items-center">
      <form
        className="bg-gray-300 px-8 py-12 rounded-lg shadow-lg"
        onClick={(e) => e.preventDefault()}
      >
        <CalculatorInput result={result} setResult={setResult} />

        <div className="grid grid-cols-5 mt-12 gap-4">
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={7}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={8}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={9}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorOpButton
            result={result}
            setResult={setResult}
            op={"÷"}
            setKeying={setKeying}
            operand={operand}
            setOperand={setOperand}
            operated={operated}
            setOperated={setOperated}
            updateop={updateop}
            setUpdateOp={setUpdateOp}
            prevop={prevop}
            setPrevOp={setPrevOp}
          />
          <CalculatorDelButton result={result} setResult={setResult} />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={4}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={5}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={6}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorOpButton
            result={result}
            setResult={setResult}
            op={"×"}
            setKeying={setKeying}
            operand={operand}
            setOperand={setOperand}
            operated={operated}
            setOperated={setOperated}
            updateop={updateop}
            setUpdateOp={setUpdateOp}
            prevop={prevop}
            setPrevOp={setPrevOp}
          />
          <CalculatorPlusMinusButton result={result} setResult={setResult} />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={1}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={2}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={3}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorOpButton
            result={result}
            setResult={setResult}
            op={"-"}
            setKeying={setKeying}
            operand={operand}
            setOperand={setOperand}
            operated={operated}
            setOperated={setOperated}
            updateop={updateop}
            setUpdateOp={setUpdateOp}
            prevop={prevop}
            setPrevOp={setPrevOp}
          />
          <CalculatorPercentButton
            result={result}
            setResult={setResult}
            op={op}
            setOp={setOp}
            operand={operand}
            setKeying={setKeying}
            setOperated={setOperated}
          />
          <CalculatorClearButton
            setResult={setResult}
            setPrevOp={setPrevOp}
            setOp={setOp}
            setOperand={setOperand}
            setOperated={setOperated}
            setKeying={setKeying}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={0}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={"."}
            keying={keying}
            setKeying={setKeying}
            setUpdateOp={setUpdateOp}
          />
          <CalculatorOpButton
            result={result}
            setResult={setResult}
            op={"+"}
            setKeying={setKeying}
            operand={operand}
            setOperand={setOperand}
            operated={operated}
            setOperated={setOperated}
            updateop={updateop}
            setUpdateOp={setUpdateOp}
            prevop={prevop}
            setPrevOp={setPrevOp}
          />
          <CalculatorEqualButton
            result={result}
            setResult={setResult}
            prevop={prevop}
            setPrevOp={setPrevOp}
            operand={operand}
            setOperand={setOperand}
            setKeying={setKeying}
            setOperated={setOperated}
          />
        </div>
      </form>
    </main>
  );
}

export default App;
