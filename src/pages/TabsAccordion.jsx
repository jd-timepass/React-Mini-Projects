/**
 * ============================================
 * PROJECT 12: TABS & ACCORDION
 * ============================================
 * 
 * 🎯 LEARNING GOALS:
 * - Compound components pattern
 * - React.Children API
 * - cloneElement for props injection
 * - Controlled vs Uncontrolled components
 * - Render props pattern (alternative)
 * - State lifting
 * 
 * ============================================
 * 📝 FEATURES TO BUILD:
 * ============================================
 * 
 * PART 1: TABS COMPONENT
 * ----------------------
 * 
 * 1. BASIC TABS
 *    - Tab headers (clickable)
 *    - Tab panels (content)
 *    - Active tab indication
 *    - Only show active panel
 * 
 * 2. COMPOUND COMPONENT API
 *    
 *    <Tabs defaultValue="tab1">
 *      <Tabs.List>
 *        <Tabs.Tab value="tab1">Profile</Tabs.Tab>
 *        <Tabs.Tab value="tab2">Settings</Tabs.Tab>
 *        <Tabs.Tab value="tab3">Messages</Tabs.Tab>
 *      </Tabs.List>
 *      
 *      <Tabs.Panel value="tab1">Profile content...</Tabs.Panel>
 *      <Tabs.Panel value="tab2">Settings content...</Tabs.Panel>
 *      <Tabs.Panel value="tab3">Messages content...</Tabs.Panel>
 *    </Tabs>
 * 
 * 3. CONTROLLED MODE
 *    - Accept value and onChange props
 *    - Parent controls active tab
 *    
 *    <Tabs value={activeTab} onChange={setActiveTab}>
 *      ...
 *    </Tabs>
 * 
 * 4. TAB VARIANTS
 *    - Horizontal tabs (default)
 *    - Vertical tabs
 *    - Pills style
 *    - Underline style
 * 
 * PART 2: ACCORDION COMPONENT
 * ---------------------------
 * 
 * 1. BASIC ACCORDION
 *    - Multiple collapsible sections
 *    - Click header to expand/collapse
 *    - Smooth height animation
 * 
 * 2. SINGLE VS MULTIPLE
 *    - Single: only one open at a time
 *    - Multiple: any number can be open
 *    
 *    <Accordion type="single"> or <Accordion type="multiple">
 * 
 * 3. COMPOUND COMPONENT API
 *    
 *    <Accordion type="single" defaultValue="item1">
 *      <Accordion.Item value="item1">
 *        <Accordion.Header>Section 1</Accordion.Header>
 *        <Accordion.Content>Content 1...</Accordion.Content>
 *      </Accordion.Item>
 *      
 *      <Accordion.Item value="item2">
 *        <Accordion.Header>Section 2</Accordion.Header>
 *        <Accordion.Content>Content 2...</Accordion.Content>
 *      </Accordion.Item>
 *    </Accordion>
 * 
 * 4. ICONS
 *    - Chevron/arrow icon in header
 *    - Rotate icon when expanded
 * 
 * ============================================
 * 🔧 COMPOUND COMPONENT PATTERN:
 * ============================================
 * 
 * // Create context for sharing state
 * const TabsContext = createContext();
 * 
 * function Tabs({ children, defaultValue, value, onChange }) {
 *   // Internal state for uncontrolled mode
 *   const [internalValue, setInternalValue] = useState(defaultValue);
 *   
 *   // Use external value if controlled, otherwise internal
 *   const activeValue = value !== undefined ? value : internalValue;
 *   
 *   const handleChange = (newValue) => {
 *     if (onChange) onChange(newValue); // Controlled
 *     else setInternalValue(newValue);   // Uncontrolled
 *   };
 *   
 *   return (
 *     <TabsContext.Provider value={{ activeValue, handleChange }}>
 *       <div className="tabs">{children}</div>
 *     </TabsContext.Provider>
 *   );
 * }
 * 
 * // Attach sub-components
 * Tabs.List = TabsList;
 * Tabs.Tab = Tab;
 * Tabs.Panel = TabPanel;
 * 
 * ============================================
 * 🔧 React.Children & cloneElement:
 * ============================================
 * 
 * // Inject props into children
 * function TabsList({ children }) {
 *   return (
 *     <div className="tabs-list">
 *       {React.Children.map(children, (child, index) => {
 *         return React.cloneElement(child, {
 *           index,
 *           // Add any props you need to inject
 *         });
 *       })}
 *     </div>
 *   );
 * }
 * 
 * ============================================
 * 💡 HINTS:
 * ============================================
 * 
 * - Use Context to share state between compound components
 * - Check if component is controlled: value !== undefined
 * - Use CSS transitions for smooth animations
 * - For accordion height animation, use max-height trick
 * - Consider keyboard navigation (arrow keys)
 * 
 * ============================================
 * 🎨 UI SUGGESTIONS:
 * ============================================
 * 
 * Tabs:
 * - Tab list with flex, gap between tabs
 * - Active tab: colored border-bottom or background
 * - Hover effect on inactive tabs
 * 
 * Accordion:
 * - Full-width sections
 * - Header: flex with space-between (text + icon)
 * - Content: padding with border
 * - Smooth expand/collapse animation
 * 
 */

function TabsAccordion() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tabs & Accordion</h1>
        <p className="text-gray-600">Build this project to learn Compound Components!</p>
        <p className="text-sm text-gray-500 mt-2">Check the comments in this file for instructions</p>
      </div>
    </div>
  );
}

export default TabsAccordion;
