function CalculatorEqualButton({
  result,
  setResult,
  prevop,
  setPrevOp,
  operand,
  setOperand,
  setKeying,
  setOperated,
}) {
  function onClickEqual() {
    console.log(operand, prevop, result);

    switch (prevop) {
      case "+":
        setResult(String(Number(operand) + Number(result)));
        setOperand(String(Number(operand) + Number(result)));
        break;
      case "-":
        setResult(String(Number(operand) - Number(result)));
        setOperand(String(Number(operand) - Number(result)));
        break;
      case "×":
        setResult(String(Number(operand) * Number(result)));
        setOperand(String(Number(operand) * Number(result)));
        break;
      case "÷":
        setResult(String(Number(operand) / Number(result)));
        setOperand(String(Number(operand) / Number(result)));
        break;
    }

    setPrevOp("=");
    setKeying(false);
    setOperated(true);
  }

  return (
    <button className="button-style" onClick={onClickEqual}>
      =
    </button>
  );
}

export default CalculatorEqualButton;
