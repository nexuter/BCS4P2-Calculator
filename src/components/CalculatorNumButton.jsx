function CalculatorNumButton({
  result,
  setResult,
  number,
  keying,
  setKeying,
  setUpdateOp,
}) {
  function onClickNumber() {
    setUpdateOp(false);
    if (!keying) {
      if (number === ".") {
        setResult("0" + String(number));
      } else {
        setResult(String(number));
      }
      setKeying(true);
    } else if (result.length < 14) {
      if (result === "0") {
        if (String(number) === ".") {
          if (result.indexOf(".") < 0) {
            setResult("0" + String(number));
          }
        } else {
          setResult(String(number));
        }
      } else {
        if (String(number) === ".") {
          if (result.indexOf(".") < 0) {
            setResult(result + String(number));
          }
        } else {
          setResult(result + String(number));
        }
      }
    }
  }

  return (
    <button className="button-style" onClick={onClickNumber}>
      {number}
    </button>
  );
}

export default CalculatorNumButton;
