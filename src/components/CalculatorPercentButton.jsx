function CalculatorPercentButton({
  result,
  setResult,
  op,
  setOp,
  operand,
  setKeying,
  setOperated,
}) {
  function onClickPercent() {
    switch (op) {
      case "+":
        setResult(
          String(Number(operand) + Number(operand) * (Number(result) / 100))
        );
        break;
      case "-":
        setResult(
          String(Number(operand) - Number(operand) * (Number(result) / 100))
        );
        break;
      case "×":
        setResult(String(Number(operand) * (Number(result) / 100)));
        break;
      case "÷":
        setResult(String(Number(operand) / (Number(result) / 100)));
        break;
    }

    setOp("");
    setKeying(false);
    setOperated(true);
  }

  return (
    <button className="button-style" onClick={onClickPercent}>
      %
    </button>
  );
}

export default CalculatorPercentButton;
