import React from "react";
// useId
function InputBox({
  label,
  extraClass = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className={`${extraClass} input-box bg-white rounded-lg p-3 flex`}>
      <div className="w-1/2">
        <label>{label}</label>
        <input
          type="number"
          className="outline-none cursor-pointer "
          defaultValue={amount}
        //   if i am using value then it is not letting me backspace the 0 which is the initial state , but when i am using the  defaultValue then i can backspace it
          disabled={amountDisable}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col flex-wrap items-end">
        {/* flex-wrap */}
        <p className="text-black/40">Currency Type</p>
        <select
          className="rounded-md bg-gray-100 cursor-pointer outline-none px-1 py-[2px]"
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((crncy) => {
            return (
              <option key={crncy} value={crncy}>
                {crncy}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
