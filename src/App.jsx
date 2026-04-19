import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ViteReact from "./pages/ViteReact";
import Counter from "./pages/Counter";
import TailwindProps from "./pages/TailwindProps";
import BgChanger from "./pages/BgChanger";
import PasswordGenerator from "./pages/PasswordGenerator";
import CurrencyConverter from "./pages/CurrencyConverter";
import TodoApp from "./pages/TodoApp";
import ThemeSwitcher from "./pages/ThemeSwitcher";
import FormValidation from "./pages/FormValidation";
import SearchFilter from "./pages/SearchFilter";
import ModalPortal from "./pages/ModalPortal";
import TabsAccordion from "./pages/TabsAccordion";
import InfiniteScroll from "./pages/InfiniteScroll";
import ShoppingCart from "./pages/ShoppingCart";
import DataFetching from "./pages/DataFetching";

function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) return null;

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-bold text-lg">Back </span>
        </Link>

        <div className="text-gray-600 font-medium">
          ⚛️ Decode React
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vite-react" element={<ViteReact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/tailwind-props" element={<TailwindProps />} />
        <Route path="/bg-changer" element={<BgChanger />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/theme-switcher" element={<ThemeSwitcher />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/modal-portal" element={<ModalPortal />} />
        <Route path="/tabs-accordion" element={<TabsAccordion />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/data-fetching" element={<DataFetching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
