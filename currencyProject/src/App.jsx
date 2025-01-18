import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo);
  // console.log("currencyInfo after hook calling is" , currencyInfo)
  // from state will change and then the App file will again render and only those component will change where some state or prop is changed .
  const options = Object.keys(currencyInfo);
  // console.log("currencyInfo are",currencyInfo);

  const backgroundUrl =
    "https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg";
  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert = () => {
    const convertedVal=(amount * Number(currencyInfo[to]))  
    console.log("Converted Amount:", convertedVal); 
    setConvertedAmount(convertedVal)
    setConvertedAmount((prev)=>{
      console.log("converted amount state",prev)
    })
  };
  return (
    <>
      <div
        className="w-full h-screen flex bg-cover justify-center items-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="w-full max-w-md relative backdrop-blur-sm rounded-lg bg-white/30 p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <InputBox
              label="From"
              extraClass="mb-1"
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              currencyOptions={options}
              amount={amount}
              selectedCurrency={from}
              onCurrencyChange={
                // what it is doing?
                (from) => {
                  console.log("after calling onCurrency Change" ,from);
                  setFrom(from);
                }
              }
            ></InputBox>
            <div className="w-full h-0.5 relative">
              <button 
                  className="bg-blue-600 px-6 py-2 rounded-lg text-white absolute left-[50%] top-[50%] -translate-y-[50%]  -translate-x-[50%] text-lg  "
                  onClick={swap}
              >
                Swap
              </button>
            </div>
            <InputBox 
                label="To"
                amount={convertedAmount }
                currencyOptions={options}
                selectedCurrency={to}
                onCurrencyChange={
                  (currency)=>{
                      setTo(currency)
                  }
                }
                amountDisable
            ></InputBox>
            <div className="btn_container flex w-full justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 px-6 py-2 rounded-lg text-lg text-white"
              >
                Convert
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
