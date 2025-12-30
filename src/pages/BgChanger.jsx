import { useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("white");
  // let [count, setCount] = useState(0);
  // Due to after refreshing onlick counter was again starting from ZERO
  // hence to continue till where we had reached in count then...
  let [count, setCount] = useState(localStorage.getItem("count"));

  const bgChanger = (color) => {
    if (bgColor !== color) setBgColor(color);
    localStorage.setItem("StoreColor", bgColor);
  };

  return (
    <div
      className="flex justify-center items-center h-lvh"
      style={{ backgroundColor: localStorage.getItem("StoreColor") }}
    >
      <button
        className="bg-green-400 p-1 rounded h-fit shadow-lg "
        onClick={() => {
          bgChanger(bgColor === "white" ? "black" : "white");
          let newCount = count++;
          setCount(count);
          localStorage.setItem("count", newCount);
        }
        }

        style={{ color: localStorage.getItem("StoreColor") === "black" ? "white" : "black" }}
      >
        <b className="m-4 p-4 ">Click Here <hr />
          You clicked {localStorage.getItem("count")} times
        </b>
      </button>
    </div>
  );
}

export default BgChanger;
