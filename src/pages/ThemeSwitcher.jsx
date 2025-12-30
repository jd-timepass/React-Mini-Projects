/**
 * ============================================
 * PROJECT 8: THEME SWITCHER
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - useContext hook
 * - createContext API
 * - Context Provider pattern
 * - Avoiding prop drilling
 * - Global state management without external libraries
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. THEME CONTEXT
 *    - Create ThemeContext with createContext()
 *    - Store: theme ('light' | 'dark'), toggleTheme function
 *    - Create ThemeProvider component to wrap app
 * 
 * 2. THEME TOGGLE
 *    - Toggle button/switch in header
 *    - Sun/Moon icons for visual feedback
 *    - Smooth transition between themes
 * 
 * 3. THEMED COMPONENTS
 *    - Create multiple nested components
 *    - Each component consumes theme from context
 *    - NO prop drilling - use useContext directly
 *    
 *    Component tree example:
 *    ThemeProvider
 *      └── Header (has toggle button)
 *      └── Main
 *           └── Sidebar
 *           └── Content
 *                └── Card
 *                └── Card
 *      └── Footer
 * 
 * 4. PERSIST THEME
 *    - Save theme preference to localStorage
 *    - Load saved theme on app start
 *    - Respect system preference (prefers-color-scheme)
 * 
 * ============================================
 * 🔧 CONTEXT STRUCTURE:
 * ============================================
 * 
 * // Create context
 * const ThemeContext = createContext();
 * 
 * // Provider component
 * function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *   
 *   const toggleTheme = () => {
 *     setTheme(prev => prev === 'light' ? 'dark' : 'light');
 *   };
 *   
 *   return (
 *     <ThemeContext.Provider value={{ theme, toggleTheme }}>
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 * 
 * // Custom hook for consuming context
 * function useTheme() {
 *   const context = useContext(ThemeContext);
 *   if (!context) {
 *     throw new Error('useTheme must be used within ThemeProvider');
 *   }
 *   return context;
 * }
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Create context in separate file (contexts/ThemeContext.js)
 * - Export: ThemeContext, ThemeProvider, useTheme
 * - Use CSS variables for theme colors
 * - Apply theme class to root element
 * - Check window.matchMedia('(prefers-color-scheme: dark)')
 * 
 * ============================================
 * 🎨 THEME VARIABLES:
 * ============================================
 * 
 * Light theme:
 * - Background: white/gray-50
 * - Text: gray-900
 * - Primary: blue-600
 * 
 * Dark theme:
 * - Background: gray-900
 * - Text: white/gray-100
 * - Primary: blue-400
 * 
 */

function ThemeSwitcher() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Theme Switcher</h1>
        <p className="text-gray-600">Build this project to learn useContext!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
