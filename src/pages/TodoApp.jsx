/**
 * ============================================
 * PROJECT 7: TODO APP
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - useReducer hook for complex state management
 * - CRUD operations (Create, Read, Update, Delete)
 * - List rendering with proper keys
 * - Controlled form inputs
 * - Local storage persistence
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. ADD TODO
 *    - Input field to type todo text
 *    - Add button or Enter key to submit
 *    - Validate: don't add empty todos
 * 
 * 2. DISPLAY TODOS
 *    - Render list of all todos
 *    - Each todo shows: text, completed status, actions
 *    - Use unique id for each todo (use Date.now() or uuid)
 * 
 * 3. TOGGLE COMPLETE
 *    - Click on todo to mark complete/incomplete
 *    - Style completed todos differently (strikethrough)
 * 
 * 4. EDIT TODO
 *    - Double click to edit todo text
 *    - Save on Enter or blur
 *    - Cancel on Escape
 * 
 * 5. DELETE TODO
 *    - Delete button for each todo
 *    - Optional: confirm before delete
 * 
 * 6. FILTER TODOS
 *    - All / Active / Completed tabs
 *    - Show count of remaining todos
 * 
 * 7. CLEAR COMPLETED
 *    - Button to remove all completed todos at once
 * 
 * ============================================
 * 🔧 useReducer STRUCTURE:
 * ============================================
 * 
 * Initial State:
 * {
 *   todos: [],
 *   filter: 'all' // 'all' | 'active' | 'completed'
 * }
 * 
 * Actions to handle:
 * - ADD_TODO
 * - TOGGLE_TODO
 * - EDIT_TODO
 * - DELETE_TODO
 * - SET_FILTER
 * - CLEAR_COMPLETED
 * 
 * Reducer function pattern:
 * function todoReducer(state, action) {
 *   switch(action.type) {
 *     case 'ADD_TODO':
 *       return { ...state, todos: [...state.todos, action.payload] }
 *     // ... handle other actions
 *     default:
 *       return state
 *   }
 * }
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - useReducer returns [state, dispatch]
 * - dispatch({ type: 'ACTION_NAME', payload: data })
 * - Keep reducer function pure (no side effects)
 * - Use useEffect to sync with localStorage
 * - Array methods: filter(), map(), find()
 * 
 * ============================================
 * 🎨 UI SUGGESTIONS:
 * ============================================
 * 
 * - Clean minimal design
 * - Checkbox for completion status  
 * - Hover effects on todo items
 * - Smooth transitions for add/delete
 * - Mobile responsive
 * 
 */

import { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-2">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">Jagdish's Todo List</h2>
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </div>
    </div>
  );
}

export default TodoApp;
