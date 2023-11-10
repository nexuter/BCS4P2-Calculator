function CalculatorOpButton({
  result,
  setResult,
  op,
  setKeying,
  operand,
  setOperand,
  operated,
  setOperated,
  updateop,
  setUpdateOp,
  prevop,
  setPrevOp,
}) {
  function onClickOp() {
    console.log(operand, prevop, result, updateop, operated);
    if (!updateop) {
      if (operated) {
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
      } else {
        setOperand(result);
      }
    }

    setPrevOp(op);
    setOperated(true);
    setUpdateOp(true);
    setKeying(false);
  }

  return (
    <button className="button-style" onClick={onClickOp}>
      {op}
    </button>
  );
}

export default CalculatorOpButton;
