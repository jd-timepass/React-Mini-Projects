import { useState } from "react";
import "./index.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

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
        onClick={() => bgChanger(bgColor === "white" ? "black" : "white")}
        style={{ color: bgColor === "black" ? "white" : "black" }}
      >
        <b>Click Here</b>
      </button>
    </div>
  );
}

export default App;
