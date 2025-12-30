/**
 * ============================================
 * PROJECT 14: SHOPPING CART
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - useReducer + useContext combined
 * - Complex state management
 * - Actions and state patterns
 * - Derived/computed state
 * - Real-world e-commerce logic
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. PRODUCT LISTING PAGE
 *    - Grid of products with image, name, price
 *    - "Add to Cart" button on each product
 *    - Show "In Cart" badge if item already added
 *    - Quick view quantity selector
 * 
 * 2. CART FUNCTIONALITY
 *    - Add item to cart
 *    - Remove item from cart
 *    - Update item quantity (+/-)
 *    - Clear entire cart
 * 
 * 3. CART SIDEBAR/MODAL
 *    - Show cart items with quantities
 *    - Individual item total (price × quantity)
 *    - Remove button for each item
 *    - Cart subtotal
 * 
 * 4. CART SUMMARY
 *    - Subtotal (sum of all items)
 *    - Discount (if coupon applied)
 *    - Shipping (free over certain amount)
 *    - Tax calculation
 *    - Grand total
 * 
 * 5. COUPON SYSTEM
 *    - Input field for coupon code
 *    - Apply/remove coupon
 *    - Show discount amount
 *    - Validate coupon codes
 * 
 * 6. CART ICON BADGE
 *    - Show total items count in header
 *    - Animate on add/remove
 * 
 * 7. PERSISTENCE
 *    - Save cart to localStorage
 *    - Restore cart on page load
 * 
 * ============================================
 * 🔧 STATE STRUCTURE:
 * ============================================
 * 
 * const initialState = {
 *   items: [
 *     // { id, name, price, quantity, image }
 *   ],
 *   coupon: null, // { code, discount, type: 'percentage' | 'fixed' }
 * };
 * 
 * ============================================
 * 🔧 REDUCER ACTIONS:
 * ============================================
 * 
 * function cartReducer(state, action) {
 *   switch (action.type) {
 *     case 'ADD_ITEM': {
 *       const existingItem = state.items.find(item => item.id === action.payload.id);
 *       if (existingItem) {
 *         // Increase quantity
 *         return {
 *           ...state,
 *           items: state.items.map(item =>
 *             item.id === action.payload.id
 *               ? { ...item, quantity: item.quantity + 1 }
 *               : item
 *           )
 *         };
 *       }
 *       // Add new item
 *       return {
 *         ...state,
 *         items: [...state.items, { ...action.payload, quantity: 1 }]
 *       };
 *     }
 *     
 *     case 'REMOVE_ITEM':
 *       return {
 *         ...state,
 *         items: state.items.filter(item => item.id !== action.payload)
 *       };
 *     
 *     case 'UPDATE_QUANTITY':
 *       return {
 *         ...state,
 *         items: state.items.map(item =>
 *           item.id === action.payload.id
 *             ? { ...item, quantity: action.payload.quantity }
 *             : item
 *         ).filter(item => item.quantity > 0) // Remove if quantity is 0
 *       };
 *     
 *     case 'APPLY_COUPON':
 *       return { ...state, coupon: action.payload };
 *     
 *     case 'REMOVE_COUPON':
 *       return { ...state, coupon: null };
 *     
 *     case 'CLEAR_CART':
 *       return { ...state, items: [], coupon: null };
 *     
 *     default:
 *       return state;
 *   }
 * }
 * 
 * ============================================
 * 🔧 CONTEXT SETUP:
 * ============================================
 * 
 * // CartContext.js
 * const CartContext = createContext();
 * 
 * function CartProvider({ children }) {
 *   const [state, dispatch] = useReducer(cartReducer, initialState);
 *   
 *   // Computed values using useMemo
 *   const cartTotal = useMemo(() => {
 *     return state.items.reduce((total, item) => {
 *       return total + (item.price * item.quantity);
 *     }, 0);
 *   }, [state.items]);
 *   
 *   const itemCount = useMemo(() => {
 *     return state.items.reduce((count, item) => count + item.quantity, 0);
 *   }, [state.items]);
 *   
 *   const discount = useMemo(() => {
 *     if (!state.coupon) return 0;
 *     if (state.coupon.type === 'percentage') {
 *       return cartTotal * (state.coupon.discount / 100);
 *     }
 *     return state.coupon.discount;
 *   }, [state.coupon, cartTotal]);
 *   
 *   // Action creators
 *   const addItem = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
 *   const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
 *   const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
 *   const applyCoupon = (coupon) => dispatch({ type: 'APPLY_COUPON', payload: coupon });
 *   const clearCart = () => dispatch({ type: 'CLEAR_CART' });
 *   
 *   // Persist to localStorage
 *   useEffect(() => {
 *     localStorage.setItem('cart', JSON.stringify(state));
 *   }, [state]);
 *   
 *   return (
 *     <CartContext.Provider value={{
 *       items: state.items,
 *       coupon: state.coupon,
 *       cartTotal,
 *       itemCount,
 *       discount,
 *       addItem,
 *       removeItem,
 *       updateQuantity,
 *       applyCoupon,
 *       clearCart
 *     }}>
 *       {children}
 *     </CartContext.Provider>
 *   );
 * }
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Create CartContext in contexts/CartContext.js
 * - Wrap app with CartProvider
 * - Use useContext(CartContext) in any component
 * - Keep computed values (total, count) in context with useMemo
 * - Initialize state from localStorage for persistence
 * 
 * ============================================
 * 📦 MOCK PRODUCTS:
 * ============================================
 * 
 * const products = [
 *   { id: 1, name: 'Laptop', price: 999.99, image: '...', category: 'Electronics' },
 *   { id: 2, name: 'Headphones', price: 149.99, image: '...', category: 'Electronics' },
 *   // ... more products
 * ];
 * 
 * const coupons = {
 *   'SAVE10': { code: 'SAVE10', discount: 10, type: 'percentage' },
 *   'FLAT50': { code: 'FLAT50', discount: 50, type: 'fixed' },
 * };
 * 
 */

function ShoppingCart() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
        <p className="text-gray-600">Build this project to master useReducer + useContext!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
