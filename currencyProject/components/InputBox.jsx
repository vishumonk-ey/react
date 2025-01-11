import React from "react";
function InputBox({label,
    extraClass="",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [] ,
    selectedCurrency ="usd",
    amountDisable=false,
    currencyDisable=false,
}){
    return (
        <div className="input-box bg-white rounded-lg p-3">
            <div className="w-1/2">
                <label>
                    {label}
                </label>
                <input
                    type="number" 
                    className="outline-none cursor-pointer "
                    value={amount}
                    disabled={amountDisable}
                    onChange={
                        (e)=>{onAmountChange && onAmountChange( Number(e.target.value) )}
                    }
                />
            </div>
            <div className="w-1/2 flex flex-col items-end"> //flex-wrap
                <p className="text-black/40">Currency Type</p>
                <select className="rounded-sm bg-gray-100 cursor-pointer outline-none px-1 py-[2px]"
                value={selectedCurrency}
                disabled={currencyDisable}
                onChange={(e)=>{
                    onCurrencyChange && onCurrencyChange(e.target.val)
                }}
                >
                    {currencyOptions.map((crncy)=>{
                        return( 
                        <option key={crncy} value={crncy}>
                            {crncy}
                        </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputBox 