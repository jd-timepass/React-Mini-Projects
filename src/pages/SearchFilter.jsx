/**
 * ============================================
 * PROJECT 10: SEARCH & FILTER
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - useMemo for expensive calculations
 * - Debouncing user input
 * - Filtering and sorting data
 * - Performance optimization
 * - Derived state patterns
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. PRODUCT LIST
 *    - Display list of products (use mock data)
 *    - Each product: name, category, price, rating, image
 *    - Card layout with grid
 * 
 * 2. SEARCH
 *    - Search input at top
 *    - Search by product name
 *    - Debounce search (300ms delay) to avoid too many re-renders
 *    - Highlight matching text in results
 * 
 * 3. FILTERS
 *    - Category filter (checkboxes or dropdown)
 *    - Price range filter (min/max inputs or slider)
 *    - Rating filter (minimum stars)
 *    - In-stock only toggle
 * 
 * 4. SORTING
 *    - Sort by: Name (A-Z, Z-A)
 *    - Sort by: Price (Low-High, High-Low)
 *    - Sort by: Rating (High-Low)
 *    - Sort by: Newest
 * 
 * 5. RESULTS INFO
 *    - Show count: "Showing X of Y products"
 *    - Clear all filters button
 *    - Active filters display (chips/tags)
 * 
 * ============================================
 * 🔧 useMemo USAGE:
 * ============================================
 * 
 * // Memoize filtered results - only recalculate when dependencies change
 * const filteredProducts = useMemo(() => {
 *   console.log('Filtering products...'); // Check if this runs unnecessarily
 *   
 *   return products
 *     .filter(product => {
 *       // Search filter
 *       if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
 *         return false;
 *       }
 *       // Category filter
 *       if (selectedCategories.length && !selectedCategories.includes(product.category)) {
 *         return false;
 *       }
 *       // Price filter
 *       if (product.price < priceRange.min || product.price > priceRange.max) {
 *         return false;
 *       }
 *       // ... more filters
 *       return true;
 *     })
 *     .sort((a, b) => {
 *       // Apply sorting
 *     });
 * }, [products, searchTerm, selectedCategories, priceRange, sortBy]);
 * 
 * ============================================
 * 🔧 DEBOUNCE IMPLEMENTATION:
 * ============================================
 * 
 * // Custom useDebounce hook
 * function useDebounce(value, delay) {
 *   const [debouncedValue, setDebouncedValue] = useState(value);
 *   
 *   useEffect(() => {
 *     const timer = setTimeout(() => {
 *       setDebouncedValue(value);
 *     }, delay);
 *     
 *     return () => clearTimeout(timer); // Cleanup on value change
 *   }, [value, delay]);
 *   
 *   return debouncedValue;
 * }
 * 
 * // Usage
 * const [searchInput, setSearchInput] = useState('');
 * const debouncedSearch = useDebounce(searchInput, 300);
 * // Use debouncedSearch in useMemo dependencies, not searchInput
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Create mock data with 20+ products
 * - useMemo prevents re-filtering on every render
 * - Debounce prevents filtering on every keystroke
 * - Keep filter state in URL params for shareable links (optional advanced)
 * - Use useCallback for event handlers passed to child components
 * 
 * ============================================
 * 📦 MOCK DATA STRUCTURE:
 * ============================================
 * 
 * const products = [
 *   {
 *     id: 1,
 *     name: 'Wireless Headphones',
 *     category: 'Electronics',
 *     price: 99.99,
 *     rating: 4.5,
 *     inStock: true,
 *     image: 'url',
 *     createdAt: '2024-01-15'
 *   },
 *   // ... more products
 * ];
 * 
 */

function SearchFilter() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Search & Filter</h1>
        <p className="text-gray-600">Build this project to learn useMemo & debouncing!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default SearchFilter;
