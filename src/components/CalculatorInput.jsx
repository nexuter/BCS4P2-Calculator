function CalculatorInput({ result, setResult }) {
  function onChangeResult(e) {
    if (e.target.value.length < 15) {
      if (result === "0") {
        setResult(e.target.value.replace("0", ""));
      } else {
        var rgx = /^[0-9]*\.?[0-9]*$/;
        var newval = e.target.value.match(rgx);
        if (newval != null) {
          setResult(e.target.value.match(rgx));
        }
      }
    }
  }

  return (
    <input
      className="py-4 px-4 text-4xl rounded-xl text-right border-outline-none"
      type="text"
      value={result}
      onChange={onChangeResult}
    />
  );
}

export default CalculatorInput;
