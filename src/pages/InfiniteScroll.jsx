/**
 * ============================================
 * PROJECT 13: INFINITE SCROLL
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - useEffect cleanup function
 * - Intersection Observer API
 * - Pagination handling
 * - Loading states
 * - Error handling with retry
 * - Performance optimization
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. INFINITE SCROLL LIST
 *    - Load initial batch of items
 *    - Detect when user scrolls to bottom
 *    - Automatically load more items
 *    - Show loading indicator while fetching
 * 
 * 2. INTERSECTION OBSERVER
 *    - Create a "sentinel" element at bottom
 *    - Use IntersectionObserver to detect visibility
 *    - Trigger load when sentinel is visible
 *    - Proper cleanup on unmount
 * 
 * 3. API PAGINATION
 *    - Track current page number
 *    - Fetch next page of results
 *    - Append new items to existing list
 *    - Stop when no more items (hasMore flag)
 * 
 * 4. LOADING & ERROR STATES
 *    - Initial loading skeleton
 *    - Loading spinner for more items
 *    - Error message with retry button
 *    - "No more items" message at end
 * 
 * 5. PULL TO REFRESH (Optional)
 *    - Pull down at top to refresh
 *    - Reset list and fetch first page
 * 
 * ============================================
 * 🔧 INTERSECTION OBSERVER SETUP:
 * ============================================
 * 
 * function InfiniteScroll() {
 *   const [items, setItems] = useState([]);
 *   const [page, setPage] = useState(1);
 *   const [loading, setLoading] = useState(false);
 *   const [hasMore, setHasMore] = useState(true);
 *   
 *   const observerRef = useRef();
 *   const sentinelRef = useRef();
 *   
 *   // Fetch function
 *   const fetchItems = async (pageNum) => {
 *     setLoading(true);
 *     try {
 *       const response = await fetch(`/api/items?page=${pageNum}&limit=10`);
 *       const data = await response.json();
 *       
 *       setItems(prev => [...prev, ...data.items]);
 *       setHasMore(data.hasMore);
 *       setPage(pageNum);
 *     } catch (error) {
 *       console.error('Failed to fetch:', error);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *   
 *   // Set up Intersection Observer
 *   useEffect(() => {
 *     // Create observer
 *     observerRef.current = new IntersectionObserver(
 *       (entries) => {
 *         const [entry] = entries;
 *         if (entry.isIntersecting && hasMore && !loading) {
 *           fetchItems(page + 1);
 *         }
 *       },
 *       { threshold: 0.1 } // Trigger when 10% visible
 *     );
 *     
 *     // Observe sentinel element
 *     if (sentinelRef.current) {
 *       observerRef.current.observe(sentinelRef.current);
 *     }
 *     
 *     // CLEANUP: Disconnect observer on unmount or re-run
 *     return () => {
 *       if (observerRef.current) {
 *         observerRef.current.disconnect();
 *       }
 *     };
 *   }, [page, hasMore, loading]); // Dependencies
 *   
 *   return (
 *     <div>
 *       {items.map(item => <ItemCard key={item.id} {...item} />)}
 *       
//  *       { Sentinel element - observer watches this }
//  *       <div ref={sentinelRef} className="h-10">
//  *         {loading && <Spinner />}
//  *         {!hasMore && <p>No more items</p>}
//  *       </div>
//  *     </div>
//  *   );
//  * }
//  * 
//  * ============================================
//  * 🔧 MOCK API (No backend needed):
//  * ============================================
//  * 
//  * // Simulate API with delay
//  * const fetchMockData = async (page, limit = 10) => {
//  *   await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
//  *   
//  *   const totalItems = 100;
//  *   const start = (page - 1) * limit;
//  *   const end = start + limit;
//  *   
//  *   const items = Array.from({ length: limit }, (_, i) => ({
//  *     id: start + i + 1,
//  *     title: `Item ${start + i + 1}`,
//  *     description: `Description for item ${start + i + 1}`,
//  *     image: `https://picsum.photos/seed/${start + i + 1}/300/200`
//  *   }));
//  *   
//  *   return {
//  *     items: end <= totalItems ? items : items.slice(0, totalItems - start),
//  *     hasMore: end < totalItems,
//  *     total: totalItems
//  *   };
//  * };
//  * 
//  * ============================================
//  * 💡 HINTS:
//  * ============================================
//  * 
//  * - CLEANUP IS CRUCIAL: Always disconnect observer in cleanup
//  * - Use useRef for observer (doesn't cause re-render)
//  * - sentinel element should be at the bottom of list
//  * - Check both hasMore AND !loading before fetching
//  * - Use loading skeletons for better UX
//  * - Consider virtualization for very long lists (advanced)
//  * 
//  * ============================================
//  * 🎨 UI SUGGESTIONS:
//  * ============================================
//  * 
//  * - Card grid or list layout
//  * - Skeleton loading cards (gray placeholder)
//  * - Spinning loader at bottom while fetching
//  * - Smooth scroll behavior
//  * - "Back to top" button for long lists
//  * 
//  */

// function InfiniteScroll() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Infinite Scroll</h1>
//         <p className="text-gray-600">Build this project to learn useEffect cleanup!</p>
//         <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
//       </div>
//     </div>
//   );
// }

// export default InfiniteScroll;
