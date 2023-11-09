function CalculatorDelButton({ result, setResult }) {
  function onClickDel() {
    if (result.length == 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  }

  return (
    <button className="button-style" onClick={onClickDel}>
      →
    </button>
  );
}

export default CalculatorDelButton;
