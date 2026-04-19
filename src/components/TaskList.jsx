function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <ul className="space-y-3 mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-white shadow rounded px-4 py-2 hover:bg-gray-50 transition"
        >
          <span
            className={`flex-1 ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
          >
            {task.text}
          </span>
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onToggle(task.id)}
              className={`px-3 py-1 rounded text-sm font-medium border transition focus:outline-none ${task.completed ? "bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200" : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"}`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 rounded text-sm font-medium bg-red-100 text-red-700 border border-red-300 hover:bg-red-200 transition focus:outline-none"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;