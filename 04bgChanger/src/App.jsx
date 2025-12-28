import { useState } from "react";
import "./index.css";

function App() {
  const [bgColor, setBgColor] = useState("white");
  let [count, setCount] = useState(0);

  const bgChanger = (color) => {
    if (bgColor !== color) setBgColor(color);
  };

  return (
    <div
      className="flex justify-center items-center h-lvh"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="bg-green-400 p-1 rounded h-fit "
        onClick={() => {bgChanger(bgColor === "white" ? "black" : "white");
          let newCount = count++;
          setCount(count);
          localStorage.setItem("count", newCount);
        }
        }
         
        style={{ color: bgColor === "black" ? "white" : "black" }}
      >
        <b className="m-3">Click Here ---
          Clicked: {localStorage.getItem("count")} times
        </b>
      </button>
    </div>
  );
}

export default App;
