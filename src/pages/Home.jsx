import { Link } from "react-router-dom";

function Home() {
  const projects = [
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
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.path}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-bold text-indigo-600">
                  {String(project.id).padStart(2, "0")}
                </span>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
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
