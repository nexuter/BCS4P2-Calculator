function CalculatorClearButton({
  setResult,
  setPrevOp,
  setOp,
  setOperand,
  setOperated,
  setKeying,
}) {
  function onClickAC() {
    setResult("0");
    setPrevOp("");
    setOp("");
    setOperand("");
    setOperated(false);
    setKeying(false);
  }

  return (
    <button className="ac-button-style" onClick={onClickAC}>
      AC
    </button>
  );
}

export default CalculatorClearButton;
