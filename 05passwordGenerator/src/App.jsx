import { useState, useCallback, useEffect, useRef } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback : for Memorization in cache | optimization
  //normal useEffect se bhi kaam chalega lekin setPassword ko cache me store krke optimized code
  //ke liye useCallback is better!

  // NOTE : useCallback ---- Returns memoised/optimized function 
  //        useMemo -------- Returns memoised value

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@!#%&^*{}+_=~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }
      setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  //useEffect

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  //useRef

  const passwordRef = useRef(null);

  //copy method

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //to show select passwerd

    //you can also use range to select
    // passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-8 bg-gray-900">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-3 rounded-l-md bg-gray-100 text-gray-800 focus:outline-none"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="py-2 px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
            title="Copy to clipboard"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-gray-200 font-medium">
              Length: <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 accent-blue-600 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="numbers"
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="numbers" className="text-gray-200">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="symbols"
              type="checkbox"
              defaultChecked={charAllowed}
              // onChange={() => setCharAllowed(true)}
              // Aisa kiya to hamesha true set ho jayege so ALWAYS use PREV to toggle value!
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="symbols" className="text-gray-200">
              Include Symbols
            </label>
          </div>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
