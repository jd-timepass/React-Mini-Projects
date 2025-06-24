import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./index.css";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from) || {};

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xs">
            <h1 className="text-3xl mb-3 rounded font-bold flex justify-center bg-orange-400 p-3">
              Currency Converter
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-2">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="flex justify-center mb-2">
                <button
                  type="button"
                  className="bg-blue-400 hover:bg-blue-300 hover:scale-110 transition duration-300  px-4 py-2 rounded-lg font-bold"
                  onClick={swap}
                >
                  &#8645;
                </button>
              </div>

              <div className="w-full mb-3">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:scale-103 hover:bg-green-700 transition duration-300 w-full text-white px-4 py-3 rounded-lg"
              >
                Convert {typeof from === "string" ? from.toUpperCase() : ""} to{" "}
                {typeof to === "string" ? to.toUpperCase() : ""}
              </button>

              <button className="bg-red-600 hover:scale-103 hover:bg-red-700 transition duration-300 mt-3 w-full text-white px-4 py-3 rounded-lg"
              onClick={() => {
                setAmount("");
              }}>
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
