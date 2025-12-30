/**
 * ============================================
 * PROJECT 9: FORM VALIDATION
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - Controlled components (form inputs)
 * - Form state management
 * - Real-time validation
 * - Error handling and display
 * - Form submission handling
 * - Custom validation logic
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * 1. REGISTRATION FORM FIELDS:
 *    - Username (required, min 3 chars, alphanumeric)
 *    - Email (required, valid email format)
 *    - Password (required, min 8 chars, 1 uppercase, 1 number)
 *    - Confirm Password (must match password)
 *    - Phone (optional, valid format)
 *    - Age (optional, must be 18+)
 *    - Terms checkbox (required)
 * 
 * 2. REAL-TIME VALIDATION
 *    - Validate on blur (when leaving field)
 *    - Validate on change (after first blur)
 *    - Show error messages below each field
 *    - Visual indicators (red border for error, green for valid)
 * 
 * 3. PASSWORD STRENGTH METER
 *    - Show strength: Weak / Medium / Strong
 *    - Visual progress bar
 *    - Check: length, uppercase, lowercase, numbers, symbols
 * 
 * 4. FORM SUBMISSION
 *    - Validate all fields before submit
 *    - Disable submit button if form invalid
 *    - Show loading state during submission
 *    - Success/Error feedback after submit
 * 
 * 5. FORM RESET
 *    - Clear all fields
 *    - Clear all errors
 *    - Reset touched states
 * 
 * ============================================
 * 🔧 STATE STRUCTURE:
 * ============================================
 * 
 * const [formData, setFormData] = useState({
 *   username: '',
 *   email: '',
 *   password: '',
 *   confirmPassword: '',
 *   phone: '',
 *   age: '',
 *   agreeToTerms: false
 * });
 * 
 * const [errors, setErrors] = useState({});
 * const [touched, setTouched] = useState({});
 * const [isSubmitting, setIsSubmitting] = useState(false);
 * 
 * ============================================
 * 🔧 VALIDATION FUNCTIONS:
 * ============================================
 * 
 * const validators = {
 *   username: (value) => {
 *     if (!value) return 'Username is required';
 *     if (value.length < 3) return 'Username must be at least 3 characters';
 *     if (!/^[a-zA-Z0-9]+$/.test(value)) return 'Only alphanumeric characters';
 *     return '';
 *   },
 *   email: (value) => {
 *     if (!value) return 'Email is required';
 *     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email';
 *     return '';
 *   },
 *   // ... more validators
 * };
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Use onChange for controlled inputs
 * - Use onBlur to mark field as touched
 * - Only show errors for touched fields
 * - Create reusable Input component with error display
 * - Use regex for validation patterns
 * - Consider debouncing validation for performance
 * 
 * ============================================
 * 🎨 UI SUGGESTIONS:
 * ============================================
 * 
 * - Clean form layout with labels
 * - Inline error messages (red text below input)
 * - Input border color: default -> error (red) -> valid (green)
 * - Password visibility toggle (eye icon)
 * - Animated error messages
 * - Loading spinner on submit button
 * 
 */

function FormValidation() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Form Validation</h1>
        <p className="text-gray-600">Build this project to master controlled components!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default FormValidation;
