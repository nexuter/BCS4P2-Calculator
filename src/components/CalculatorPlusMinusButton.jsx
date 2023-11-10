function CalculatorPlusMinusButton({ result, setResult }) {
  function onClickPlusMinus() {
    setResult(String(Number(result) * -1));
  }
  return (
    <button className="button-style" onClick={onClickPlusMinus}>
      ±
    </button>
  );
}

export default CalculatorPlusMinusButton;
