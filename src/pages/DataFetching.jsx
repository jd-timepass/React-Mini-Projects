/**
 * ============================================
 * PROJECT 15: DATA FETCHING PATTERNS
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - Async operations in useEffect
 * - Loading, error, and data states
 * - AbortController for cleanup
 * - Custom data fetching hook
 * - Caching strategies
 * - Optimistic updates
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. BASIC DATA FETCHING
 *    - Fetch data on component mount
 *    - Show loading spinner
 *    - Display data when loaded
 *    - Show error message if failed
 *    - Retry button on error
 * 
 * 2. FETCH WITH CLEANUP
 *    - Use AbortController to cancel requests
 *    - Prevent state updates on unmounted component
 *    - Handle race conditions
 * 
 * 3. CUSTOM useFetch HOOK
 *    - Reusable hook for any API endpoint
 *    - Returns { data, loading, error, refetch }
 *    - Handles all the boilerplate
 * 
 * 4. DEPENDENT FETCHING
 *    - Fetch user data first
 *    - Then fetch user's posts using user ID
 *    - Chain multiple requests
 * 
 * 5. PARALLEL FETCHING
 *    - Fetch multiple endpoints simultaneously
 *    - Use Promise.all or Promise.allSettled
 *    - Show partial data as it loads
 * 
 * 6. MUTATION WITH OPTIMISTIC UPDATE
 *    - Update UI immediately (optimistically)
 *    - Send request to server
 *    - Rollback if request fails
 *    
 *    Example: Like button
 *    - Click: immediately show liked state
 *    - Send like request to server
 *    - If fails: revert to unliked state
 * 
 * ============================================
 * 🔧 BASIC FETCH PATTERN:
 * ============================================
 * 
 * function UserProfile({ userId }) {
 *   const [user, setUser] = useState(null);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState(null);
 *   
 *   useEffect(() => {
 *     // Create abort controller for cleanup
 *     const abortController = new AbortController();
 *     
 *     async function fetchUser() {
 *       try {
 *         setLoading(true);
 *         setError(null);
 *         
 *         const response = await fetch(`/api/users/${userId}`, {
 *           signal: abortController.signal // Pass signal to fetch
 *         });
 *         
 *         if (!response.ok) {
 *           throw new Error(`HTTP error! status: ${response.status}`);
 *         }
 *         
 *         const data = await response.json();
 *         setUser(data);
 *       } catch (err) {
 *         // Don't set error if request was aborted
 *         if (err.name !== 'AbortError') {
 *           setError(err.message);
 *         }
 *       } finally {
 *         setLoading(false);
 *       }
 *     }
 *     
 *     fetchUser();
 *     
 *     // CLEANUP: Abort request when component unmounts or userId changes
 *     return () => {
 *       abortController.abort();
 *     };
 *   }, [userId]); // Re-fetch when userId changes
 *   
 *   if (loading) return <Spinner />;
 *   if (error) return <Error message={error} onRetry={() => {}} />;
 *   return <UserCard user={user} />;
 * }
 * 
 * ============================================
 * 🔧 CUSTOM useFetch HOOK:
 * ============================================
 * 
 * function useFetch(url, options = {}) {
 *   const [data, setData] = useState(null);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState(null);
 *   
 *   const fetchData = useCallback(async () => {
 *     const abortController = new AbortController();
 *     
 *     try {
 *       setLoading(true);
 *       setError(null);
 *       
 *       const response = await fetch(url, {
 *         ...options,
 *         signal: abortController.signal
 *       });
 *       
 *       if (!response.ok) throw new Error('Failed to fetch');
 *       
 *       const json = await response.json();
 *       setData(json);
 *     } catch (err) {
 *       if (err.name !== 'AbortError') {
 *         setError(err.message);
 *       }
 *     } finally {
 *       setLoading(false);
 *     }
 *     
 *     return () => abortController.abort();
 *   }, [url, options]);
 *   
 *   useEffect(() => {
 *     const cleanup = fetchData();
 *     return cleanup;
 *   }, [fetchData]);
 *   
 *   return { data, loading, error, refetch: fetchData };
 * }
 * 
 * // Usage
 * const { data: user, loading, error, refetch } = useFetch('/api/user/1');
 * 
 * ============================================
 * 🔧 OPTIMISTIC UPDATE PATTERN:
 * ============================================
 * 
 * function LikeButton({ postId, initialLiked }) {
 *   const [liked, setLiked] = useState(initialLiked);
 *   const [isUpdating, setIsUpdating] = useState(false);
 *   
 *   const handleLike = async () => {
 *     // Store previous state for rollback
 *     const previousLiked = liked;
 *     
 *     // Optimistically update UI
 *     setLiked(!liked);
 *     setIsUpdating(true);
 *     
 *     try {
 *       await fetch(`/api/posts/${postId}/like`, {
 *         method: liked ? 'DELETE' : 'POST'
 *       });
 *     } catch (error) {
 *       // Rollback on error
 *       setLiked(previousLiked);
 *       toast.error('Failed to update. Please try again.');
 *     } finally {
 *       setIsUpdating(false);
 *     }
 *   };
 *   
 *   return (
 *     <button onClick={handleLike} disabled={isUpdating}>
 *       {liked ? '❤️' : '🤍'}
 *     </button>
 *   );
 * }
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - ALWAYS use AbortController for cleanup
 * - Check for AbortError before setting error state
 * - Use loading skeletons instead of spinners for better UX
 * - Consider caching fetched data
 * - Use JSONPlaceholder for free mock API
 * 
 * ============================================
 * 🌐 FREE APIS TO USE:
 * ============================================
 * 
 * - JSONPlaceholder: https://jsonplaceholder.typicode.com
 *   - /users, /posts, /comments, /todos
 * 
 * - Random User: https://randomuser.me/api
 * - Pokemon API: https://pokeapi.co/api/v2/pokemon
 * - Dog API: https://dog.ceo/api/breeds/image/random
 * 
 */

function DataFetching() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Data Fetching Patterns</h1>
        <p className="text-gray-600">Build this project to master async data handling!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default DataFetching;
