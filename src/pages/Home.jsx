import { Link } from "react-router-dom";

function Home() {
  const completedProjects = [
    {
      id: 1,
      title: "Vite React Basics",
      path: "/vite-react",
      description: "Basic Vite + React setup with component creation and exports",
      tags: ["Basics", "Components"],
    },
    {
      id: 2,
      title: "Counter",
      path: "/counter",
      description: "useState hook, event handling, and state management basics",
      tags: ["useState", "Events"],
    },
    {
      id: 3,
      title: "Tailwind Props",
      path: "/tailwind-props",
      description: "Tailwind CSS integration with props and component reusability",
      tags: ["Tailwind", "Props"],
    },
    {
      id: 4,
      title: "Background Changer",
      path: "/bg-changer",
      description: "useState and localStorage with persistent state",
      tags: ["useState", "localStorage"],
    },
    {
      id: 5,
      title: "Password Generator",
      path: "/password-generator",
      description: "useCallback, useEffect, useRef hooks with optimization",
      tags: ["useCallback", "useRef", "useEffect"],
    },
    {
      id: 6,
      title: "Currency Converter",
      path: "/currency-converter",
      description: "Custom hooks, API integration, and form handling",
      tags: ["Custom Hooks", "API"],
    },
  ];

  const todoProjects = [
    {
      id: 7,
      title: "Todo App",
      path: "/todo-app",
      description: "CRUD operations with useReducer for complex state management",
      tags: ["useReducer", "CRUD"],
    },
    {
      id: 8,
      title: "Theme Switcher",
      path: "/theme-switcher",
      description: "Global state with useContext, avoiding prop drilling",
      tags: ["useContext", "createContext"],
    },
    {
      id: 9,
      title: "Form Validation",
      path: "/form-validation",
      description: "Controlled components, real-time validation, error handling",
      tags: ["Forms", "Validation"],
    },
    {
      id: 10,
      title: "Search & Filter",
      path: "/search-filter",
      description: "useMemo for performance, debouncing, filtering & sorting",
      tags: ["useMemo", "Debounce"],
    },
    {
      id: 11,
      title: "Modal with Portals",
      path: "/modal-portal",
      description: "React Portals, compound components, accessibility",
      tags: ["Portals", "Compound"],
    },
    {
      id: 12,
      title: "Tabs & Accordion",
      path: "/tabs-accordion",
      description: "Compound components, React.Children, cloneElement",
      tags: ["Compound", "Children API"],
    },
    {
      id: 13,
      title: "Infinite Scroll",
      path: "/infinite-scroll",
      description: "useEffect cleanup, Intersection Observer, pagination",
      tags: ["Cleanup", "Observer"],
    },
    {
      id: 14,
      title: "Shopping Cart",
      path: "/shopping-cart",
      description: "useReducer + useContext combined, complex state patterns",
      tags: ["useReducer", "useContext"],
    },
    {
      id: 15,
      title: "Data Fetching",
      path: "/data-fetching",
      description: "Async patterns, AbortController, custom useFetch hook",
      tags: ["Async", "Custom Hooks"],
    },
  ];

  const ProjectCard = ({ project, isTodo }) => (
    <Link
      key={project.id}
      to={project.path}
      className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border ${
        isTodo 
          ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200" 
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-3xl font-bold ${isTodo ? "text-amber-600" : "text-indigo-600"}`}>
          {String(project.id).padStart(2, "0")}
        </span>
        {isTodo && (
          <span className="px-2 py-1 bg-amber-200 text-amber-800 text-xs font-bold rounded">
            TODO
          </span>
        )}
        {!isTodo && (
          <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded">
            DONE ✓
          </span>
        )}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {project.title}
      </h2>

      <p className="text-gray-600 text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              isTodo 
                ? "bg-amber-100 text-amber-700" 
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ⚛️ React Mini Projects Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of mini projects built while learning React concepts.
            Each project demonstrates different React features and hooks.
          </p>
          <p className="text-lg text-indigo-600 font-semibold mt-4">
            📌 "Best way to learn coding is by implementing it!"
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="px-3 py-1 bg-green-200 text-green-800 text-sm font-bold rounded">
              ✓ {completedProjects.length} Completed
            </span>
            <span className="px-3 py-1 bg-amber-200 text-amber-800 text-sm font-bold rounded">
              📝 {todoProjects.length} To Build
            </span>
          </div>
        </header>

        {/* Completed Projects */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-green-600">✓</span> Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {completedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isTodo={false} />
          ))}
        </div>

        {/* Todo Projects */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-amber-600">📝</span> Projects To Build
          <span className="text-sm font-normal text-gray-500">(Check comments in each file for instructions)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todoProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isTodo={true} />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            📚 Learning Resources
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔧</span>
              <div>
                <h4 className="font-semibold text-gray-800">Custom React</h4>
                <p className="text-gray-600 text-sm">
                  Understanding React rendering and creating custom render
                  function. Check{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    src/learning/customReact.js
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            Built with ⚛️ React 18.3 • 🧰 Vite • 🎨 Tailwind CSS
          </p>
          <p className="text-sm">
            📧 jagdishpadhi9@gmail.com •{" "}
            <a
              href="https://linkedin.com/in/jagdish-padhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
