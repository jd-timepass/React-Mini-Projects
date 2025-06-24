import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom app</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to go to google",
// };

// const anotherElement = (
//   <a href="http://google.com" target="_blank">
//     visit Google
//   </a>
// );

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click me to visit google"
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
