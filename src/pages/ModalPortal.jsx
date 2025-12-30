/**
 * ============================================
 * PROJECT 11: MODAL WITH PORTALS
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - React Portals (createPortal)
 * - children prop pattern
 * - Compound components
 * - Event bubbling in portals
 * - Focus management & accessibility
 * - Keyboard navigation (Escape to close)
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. MODAL COMPONENT
 *    - Renders outside normal DOM hierarchy using Portal
 *    - Overlay backdrop (semi-transparent)
 *    - Centered modal content
 *    - Close on backdrop click
 *    - Close on Escape key
 *    - Prevent body scroll when open
 * 
 * 2. MODAL VARIANTS
 *    - Different sizes: sm, md, lg, full
 *    - Different positions: center, top, bottom
 *    - Animation: fade in/out, slide in
 * 
 * 3. COMPOUND COMPONENTS PATTERN
 *    - Modal.Header (title, close button)
 *    - Modal.Body (main content)
 *    - Modal.Footer (action buttons)
 *    
 *    Usage:
 *    <Modal isOpen={isOpen} onClose={handleClose}>
 *      <Modal.Header>Title</Modal.Header>
 *      <Modal.Body>Content goes here</Modal.Body>
 *      <Modal.Footer>
 *        <Button onClick={handleClose}>Cancel</Button>
 *        <Button onClick={handleConfirm}>Confirm</Button>
 *      </Modal.Footer>
 *    </Modal>
 * 
 * 4. CONFIRMATION DIALOG
 *    - Reusable confirm dialog
 *    - Title, message, confirm/cancel buttons
 *    - Returns promise for async handling
 *    
 *    const confirmed = await confirm({
 *      title: 'Delete Item?',
 *      message: 'This action cannot be undone.'
 *    });
 * 
 * 5. ACCESSIBILITY
 *    - Focus trap inside modal
 *    - Return focus to trigger element on close
 *    - Proper ARIA attributes
 *    - Screen reader announcements
 * 
 * ============================================
 * 🔧 PORTAL USAGE:
 * ============================================
 * 
 * import { createPortal } from 'react-dom';
 * 
 * function Modal({ isOpen, onClose, children }) {
 *   if (!isOpen) return null;
 *   
 *   return createPortal(
 *     <div className="modal-overlay" onClick={onClose}>
 *       <div className="modal-content" onClick={e => e.stopPropagation()}>
 *         {children}
 *       </div>
 *     </div>,
 *     document.getElementById('modal-root') // Need to add this div to index.html
 *   );
 * }
 * 
 * ============================================
 * 🔧 ADD TO index.html:
 * ============================================
 * 
 * <body>
 *   <div id="root"></div>
 *   <div id="modal-root"></div>  <!-- Add this -->
 * </body>
 * 
 * ============================================
 * 🔧 ESCAPE KEY & BODY SCROLL:
 * ============================================
 * 
 * useEffect(() => {
 *   const handleEscape = (e) => {
 *     if (e.key === 'Escape') onClose();
 *   };
 *   
 *   if (isOpen) {
 *     document.addEventListener('keydown', handleEscape);
 *     document.body.style.overflow = 'hidden'; // Prevent scroll
 *   }
 *   
 *   return () => {
 *     document.removeEventListener('keydown', handleEscape);
 *     document.body.style.overflow = 'unset';
 *   };
 * }, [isOpen, onClose]);
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Portal renders children into different DOM node
 * - Events still bubble up through React tree (not DOM tree)
 * - Use stopPropagation to prevent backdrop click on content
 * - Use React.Children API for compound components
 * - Add transition for smooth open/close animation
 * 
 * ============================================
 * 🎨 UI SUGGESTIONS:
 * ============================================
 * 
 * - Backdrop: bg-black/50 (semi-transparent black)
 * - Modal: white card with shadow
 * - Smooth fade in: opacity transition
 * - Slide up animation for content
 * - Close button (X) in top-right corner
 * 
 */

function ModalPortal() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Modal with Portals</h1>
        <p className="text-gray-600">Build this project to learn React Portals!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default ModalPortal;
