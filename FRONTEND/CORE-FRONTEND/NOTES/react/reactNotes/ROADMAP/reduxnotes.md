Perfect 💡 — let’s turn this into a **“Sticky Notes Wall of Ideas”** 📝 so you can glance at it anytime in the future and remember exactly what to build. I’ll break it down into **colored sticky notes style** (categories), with all the important details.

---

# 🗂 Sticky Notes for “One Best Choice” Recommendation Platform

---

## 🟢 Core Idea

* ❗ Platform gives **only ONE best recommendation** per need.
* ❗ Avoids decision fatigue → saves time.
* ❗ **No ads, no sponsorships, no clutter.**
* ❗ Acts like a trusted friend saying: “Just buy this one.”

---

## 🔵 Differentiators (vs Rtings / Wirecutter / TechRadar)

* ✔ **One-Answer Philosophy** → no “Top 10,” only 1.
* ✔ **Context-aware picks** → based on budget + use case.
* ✔ **Transparent scoring** → show why this pick won.
* ✔ **Real-time updates** → stock + price refreshed automatically.
* ✔ **Minimal UX** → 3 questions → one product card.
# 📚 Complete Redux & Redux Toolkit Deep Learning Guide

> A comprehensive reference with detailed explanations, diagrams, and mindmaps for every concept

---

## 🗺️ **Complete Redux Ecosystem Mindmap**

```
Redux State Management System
├── 🏪 STORE (Central Hub)
│   ├── getState() → Current state snapshot
│   ├── dispatch(action) → Send action to reducers
│   ├── subscribe(listener) → Listen to state changes
│   └── replaceReducer(nextReducer) → Hot reload support
│
├── 🎯 ACTIONS (What Happened)
│   ├── type: string (required) → Action identifier
│   ├── payload: any (optional) → Data for the action
│   ├── meta: any (optional) → Extra info about action
│   └── error: boolean (optional) → Is this an error action?
│
├── 🔄 REDUCERS (How State Changes)
│   ├── Pure Functions (state, action) → newState
│   ├── No mutations → Always return new state
│   ├── No side effects → No API calls, no random values
│   └── Default case → Return current state
│
├── 🚀 MIDDLEWARE (Between Action & Reducer)
│   ├── Redux-Thunk → Handle async actions
│   ├── Redux-Saga → Handle complex async flows
│   ├── Redux-Logger → Log actions and state
│   └── Custom Middleware → Your own logic
│
├── ⚛️ REACT-REDUX (Bridge to React)
│   ├── Provider → Makes store available to components
│   ├── useSelector(selector) → Extract state data
│   ├── useDispatch() → Get dispatch function
│   └── connect() → Legacy HOC pattern
│
├── 🛠️ REDUX TOOLKIT (Modern Redux)
│   ├── configureStore() → Enhanced store setup
│   ├── createSlice() → Reducer + actions combined
│   ├── createAsyncThunk() → Async action handling
│   ├── createEntityAdapter() → Normalized state management
│   └── RTK Query → Data fetching solution
│
└── 🧪 DEVTOOLS & DEBUGGING
    ├── Redux DevTools → Time travel debugging
    ├── Action logging → See all dispatched actions
    ├── State inspection → Examine state at any point
    └── Performance monitoring → Track re-renders
```

---

## 🔄 **Redux Data Flow Control Diagram**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   USER INPUT    │    │   COMPONENT      │    │   DISPATCH      │
│                 │    │                  │    │                 │
│ • Button Click  │───▶│ Event Handler    │───▶│ dispatch(action)│
│ • Form Submit   │    │ • onClick        │    │                 │
│ • Input Change  │    │ • onSubmit       │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   NEW STATE     │    │    REDUCER       │    │     ACTION      │
│                 │    │                  │    │                 │
│ • Updated data  │◀───│ Pure Function    │◀───│ { type, payload}│
│ • Same reference│    │ (state,action)   │    │                 │
│   if no change  │    │ → newState       │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                                               ▲
         ▼                                               │
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   STORE UPDATE  │    │   MIDDLEWARE     │    │  ACTION CREATOR │
│                 │    │   (Optional)     │    │                 │
│ • Notify subs   │    │ • Logging        │───▶│ Function that   │
│ • Trigger       │    │ • Async handling │    │ returns action  │
│   re-renders    │    │ • Side effects   │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐
│  COMPONENT      │
│  RE-RENDER      │
│                 │
│ • useSelector   │
│   gets new data │
│ • UI updates    │
└─────────────────┘
```

---

# 📖 **Chapter 1: Understanding the Store - The Heart of Redux**

## 🏪 **What is the Store?**

The **Store** is like a **bank vault** that holds all your application's state. Think of it as:
- **Single Source of Truth**: Only one store per application
- **Read-Only**: Can't directly modify the state
- **Predictable**: State changes only through specific rules (reducers)

### **Store Methods Mindmap**

```
STORE OBJECT
├── getState()
│   ├── Returns → Current state snapshot
│   ├── Usage → const currentState = store.getState()
│   ├── When → To read state outside React components
│   └── Note → Don't use in components (use useSelector)
│
├── dispatch(action)
│   ├── Purpose → Send actions to reducers
│   ├── Parameter → Action object {type, payload}
│   ├── Returns → The dispatched action
│   ├── Side Effect → Triggers reducer execution
│   └── Usage → store.dispatch({type: 'INCREMENT'})
│
├── subscribe(listener)
│   ├── Purpose → Listen to state changes
│   ├── Parameter → Callback function
│   ├── Returns → Unsubscribe function
│   ├── Triggers → Every time state changes
│   └── Usage → const unsubscribe = store.subscribe(callback)
│
└── replaceReducer(nextReducer)
    ├── Purpose → Hot reloading & code splitting
    ├── Parameter → New reducer function
    ├── Usage → Development & dynamic loading
    └── Advanced → Rarely used in normal apps
```

### **Creating a Store - Step by Step**

```javascript
// Step 1: Import createStore (Vanilla Redux)
import { createStore } from 'redux'

// Step 2: Define your reducer (we'll learn this next)
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':  
      return { count: state.count - 1 }
    default:
      return state  // ALWAYS return current state for unknown actions
  }
}

// Step 3: Create the store
const store = createStore(counterReducer)

// Step 4: Understanding what the store contains
console.log('Store methods:', Object.keys(store))
// Output: ['dispatch', 'subscribe', 'getState', 'replaceReducer']

// Step 5: Using store methods
console.log('Initial state:', store.getState())  // {count: 0}

store.dispatch({ type: 'INCREMENT' })
console.log('After increment:', store.getState())  // {count: 1}
```

### **Store Lifecycle Diagram**

```
Store Creation Process:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Reducer   │───▶│    Store    │───▶│ Initial     │
│  Function   │    │  Created    │    │ State Set   │
└─────────────┘    └─────────────┘    └─────────────┘
                           │
                           ▼
                   ┌─────────────┐
                   │   Store     │
                   │  Methods    │
                   │  Available  │
                   └─────────────┘

Store Usage Flow:
dispatch(action) ──┐
                   ▼
              ┌─────────┐    ┌─────────┐    ┌─────────┐
              │ Reducer │───▶│New State│───▶│Listeners│
              │Executes │    │Created  │    │Notified │
              └─────────┘    └─────────┘    └─────────┘
```

---

## 🎯 **Understanding Actions - The Messengers**

### **What are Actions?**

Actions are **plain JavaScript objects** that describe **what happened** in your app. Think of them as:
- **Messages**: Tell the store what to do
- **Events**: Describe something that occurred
- **Instructions**: Contain data needed for the change

### **Action Object Structure Mindmap**

```
ACTION OBJECT
├── type (REQUIRED)
│   ├── Data Type → string
│   ├── Purpose → Identifies what happened
│   ├── Convention → UPPER_SNAKE_CASE or 'domain/actionName'
│   ├── Examples → 'INCREMENT', 'users/userAdded'
│   └── Note → Must be serializable (no functions)
│
├── payload (OPTIONAL)
│   ├── Data Type → any serializable value
│   ├── Purpose → Data needed for the action
│   ├── Examples → numbers, strings, objects, arrays
│   ├── Convention → Use 'payload' as key name
│   └── Alternative → Can use specific names (id, user, etc.)
│
├── meta (OPTIONAL)
│   ├── Purpose → Extra information about action
│   ├── Usage → Timestamps, source component, etc.
│   ├── Example → { meta: { timestamp: Date.now() } }
│   └── Note → Not used for business logic
│
└── error (OPTIONAL)
    ├── Data Type → boolean
    ├── Purpose → Indicates if this is an error action
    ├── Usage → { type: 'FETCH_FAILED', error: true }
    └── Convention → Flux Standard Action (FSA)
```

### **Action Examples with Detailed Explanations**

```javascript
// ✅ GOOD: Simple action
const incrementAction = {
  type: 'INCREMENT'  // Tells reducer to increment
}

// ✅ GOOD: Action with payload
const addTodoAction = {
  type: 'ADD_TODO',
  payload: {         // Data needed to add todo
    id: 123,
    text: 'Learn Redux',
    completed: false
  }
}

// ✅ GOOD: Action with meta information
const userLoginAction = {
  type: 'USER_LOGIN',
  payload: { userId: 456, username: 'john' },
  meta: {            // Additional info, not for business logic
    timestamp: Date.now(),
    source: 'LoginForm'
  }
}

// ✅ GOOD: Error action
const fetchErrorAction = {
  type: 'FETCH_USERS_FAILED',
  payload: new Error('Network error'),
  error: true        // Indicates this is an error action
}

// ❌ BAD: Non-serializable action (has function)
const badAction = {
  type: 'BAD_ACTION',
  callback: () => console.log('bad')  // Can't serialize functions
}

// ❌ BAD: Missing required type
const missingTypeAction = {
  payload: { data: 'some data' }  // No type property
}
```

## 🏭 **Action Creators - Action Factories**

### **What are Action Creators?**

Action creators are **functions that create and return action objects**. They're like **factories** that produce consistent actions.

### **Action Creator Benefits Mindmap**

```
ACTION CREATORS
├── Benefits
│   ├── Consistency → Always return correct action shape
│   ├── Reusability → Use same creator in multiple places
│   ├── Validation → Can validate parameters
│   ├── Testing → Easier to test than inline objects
│   └── Maintenance → Change action structure in one place
│
├── Types
│   ├── Simple → Return plain action object
│   ├── Parameterized → Accept arguments for payload
│   ├── Async → Return functions (with thunk middleware)
│   └── Generated → Auto-created by Redux Toolkit
│
└── Best Practices
    ├── Naming → Use verb forms (addTodo, not todoAdded)
    ├── Parameters → Make them explicit and typed
    ├── Validation → Check required parameters
    └── Export → Export for use in components
```

### **Action Creator Examples**

```javascript
// Simple action creator (no parameters)
const increment = () => ({
  type: 'INCREMENT'
})

// Parameterized action creator
const addTodo = (text) => {
  // Input validation
  if (!text || typeof text !== 'string') {
    throw new Error('Text must be a non-empty string')
  }
  
  return {
    type: 'ADD_TODO',
    payload: {
      id: Date.now(),           // Generate unique ID
      text: text.trim(),        // Clean the input
      completed: false,
      createdAt: new Date().toISOString()
    }
  }
}

// Action creator with multiple parameters
const updateUser = (userId, updates) => ({
  type: 'UPDATE_USER',
  payload: { userId, updates },
  meta: { timestamp: Date.now() }
})

// Usage in components
const handleAddTodo = () => {
  const newTodo = addTodo('Learn Redux')  // Create action
  dispatch(newTodo)                       // Dispatch action
}

// Or more commonly:
const handleAddTodo = () => {
  dispatch(addTodo('Learn Redux'))        // Create and dispatch together
}
```

---

## 🔄 **Understanding Reducers - The State Transformers**

### **What are Reducers?**

Reducers are **pure functions** that specify how the application's state changes in response to actions. Think of them as:
- **Calculators**: Take current state + action = new state
- **Rules**: Define how each action type changes state
- **Predictable**: Same inputs always produce same output

### **Reducer Function Anatomy**

```javascript
// Reducer signature: (previousState, action) => newState
const todosReducer = (state = initialState, action) => {
  //                   ↑               ↑         ↑
  //            default value    current     what happened
  //            (first run)      state
  
  switch (action.type) {
    case 'ADD_TODO':
      // Return NEW state object (immutability)
      return [...state, action.payload]
      
    case 'REMOVE_TODO':
      // Filter creates new array
      return state.filter(todo => todo.id !== action.payload.id)
      
    default:
      // ALWAYS return current state for unknown actions
      return state
  }
}
```

### **Reducer Rules Mindmap**

```
REDUCER RULES (MUST FOLLOW)
├── Pure Function
│   ├── Same Input → Same Output (always)
│   ├── No Side Effects → No API calls, no console.log
│   ├── No Mutations → Don't modify parameters
│   └── Deterministic → Predictable results
│
├── Immutability
│   ├── Never Mutate State → Don't modify original
│   ├── Return New Objects → Create fresh references
│   ├── Techniques → Spread operator, Object.assign
│   └── Why → React needs new references to re-render
│
├── Default Case
│   ├── Always Include → Handle unknown actions
│   ├── Return State → Current state unchanged
│   ├── Why → Store initialization & unknown actions
│   └── Purpose → Prevents undefined state
│
└── State Parameter
    ├── Default Value → Use default parameter
    ├── Initial State → First time reducer runs
    ├── Undefined → When store is created
    └── Pattern → state = initialState
```

### **Immutability Patterns**

```javascript
const initialState = {
  todos: [],
  filter: 'all',
  user: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // ✅ ARRAY: Add item (immutable)
    case 'ADD_TODO':
      return {
        ...state,                           // Copy all existing properties
        todos: [...state.todos, action.payload]  // New array with new item
      }
    
    // ✅ ARRAY: Remove item (immutable)
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    
    // ✅ ARRAY: Update item (immutable)
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }  // New object
            : todo                                      // Keep same reference
        )
      }
    
    // ✅ OBJECT: Update property (immutable)
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    
    // ✅ NESTED OBJECT: Update deeply nested (immutable)
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        user: {
          ...state.user,                    // Copy existing user properties
          profile: {
            ...state.user.profile,          // Copy existing profile
            ...action.payload               // Update with new data
          }
        }
      }
    
    default:
      return state
  }
}

// ❌ BAD EXAMPLES (Mutations)
case 'BAD_ADD_TODO':
  state.todos.push(action.payload)  // Mutates original array!
  return state

case 'BAD_UPDATE_TODO':
  const todo = state.todos.find(t => t.id === action.payload.id)
  todo.completed = true             // Mutates original object!
  return state

case 'BAD_UPDATE_OBJECT':
  state.filter = action.payload     // Mutates original object!
  return state
```

### **Combining Reducers**

When your app grows, you'll want to split your reducers:

```javascript
import { combineReducers } from 'redux'

// Separate reducers for different parts of state
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default:
      return state
  }
}

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}

// Combine into root reducer
const rootReducer = combineReducers({
  todos: todosReducer,      // state.todos managed by todosReducer
  filter: filterReducer,    // state.filter managed by filterReducer
  user: userReducer         // state.user managed by userReducer
})

// Resulting state shape:
// {
//   todos: [...],
//   filter: 'all',
//   user: {...}
// }
```

---

# ⚛️ **Chapter 2: React-Redux Integration Deep Dive**

## 🌉 **Provider Component - The Bridge**

### **What is Provider?**

The `Provider` component makes the Redux store available to all React components in your app. It's like a **bridge** between Redux and React.

### **Provider Mindmap**

```
PROVIDER COMPONENT
├── Purpose
│   ├── Store Access → Makes store available to all components
│   ├── Context API → Uses React Context under the hood
│   ├── Top Level → Wrap your entire app
│   └── Single Source → One provider per app
│
├── Props
│   ├── store (required) → Redux store instance
│   ├── context (optional) → Custom React context
│   └── children → App components
│
├── Usage Pattern
│   ├── Wrap App → <Provider store={store}><App /></Provider>
│   ├── Root Level → Usually in index.js or App.js
│   ├── Once Only → Don't nest providers
│   └── Store Prop → Pass configured store
│
└── How It Works
    ├── React Context → Provides store via context
    ├── useSelector → Reads from context
    ├── useDispatch → Gets dispatch from context
    └── Subscription → Components subscribe to store changes
```

### **Provider Setup Example**

```javascript
// index.js - App entry point
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

// Create your store
const store = createStore(rootReducer)

// Wrap your app with Provider
ReactDOM.render(
  <Provider store={store}>    {/* Makes store available to all components */}
    <App />                   {/* Your entire app has access to store */}
  </Provider>,
  document.getElementById('root')
)

// Now ANY component inside App can use:
// - useSelector to read state
// - useDispatch to dispatch actions
```

## 🪝 **useSelector Hook - Reading State**

### **What is useSelector?**

`useSelector` is a React hook that **extracts data from Redux state**. It's like a **window** into your store that automatically updates your component when the data changes.

### **useSelector Mindmap**

```
useSelector Hook
├── Purpose
│   ├── Read State → Extract data from Redux store
│   ├── Auto Subscribe → Component re-renders when data changes
│   ├── Selector Function → You decide what data to extract
│   └── Performance → Only re-renders when selected data changes
│
├── Syntax: useSelector(selectorFunction)
│   ├── Parameter → Function: (state) => selectedData
│   ├── Return → The selected data from state
│   ├── Type → Same type as what selector returns
│   └── Reactivity → Re-runs when store state changes
│
├── Selector Function
│   ├── Input → Entire Redux state
│   ├── Output → Specific piece of data you need
│   ├── Examples → state => state.todos, state => state.user.name
│   └── Can Transform → Process data before returning
│
├── When Component Re-renders
│   ├── Condition → When selected data changes (===)
│   ├── Equality → Shallow equality check by default
│   ├── Performance → Won't re-render if data is same
│   └── Custom Compare → Can provide custom comparison function
│
└── Common Patterns
    ├── Simple Select → useSelector(state => state.todos)
    ├── Nested Select → useSelector(state => state.user.profile.name)
    ├── Derived Data → useSelector(state => state.todos.filter(...))
    └── Multiple Selects → Multiple useSelector calls in same component
```

### **useSelector Examples with Detailed Explanations**

```javascript
import { useSelector } from 'react-redux'

function TodoApp() {
  // Basic usage: Select entire todos array
  const todos = useSelector(state => state.todos)
  //    ↑                    ↑
  //  result           selector function
  // 
  // What happens:
  // 1. Hook extracts state.todos from store
  // 2. Component re-renders when todos array changes
  // 3. If todos array is same reference, no re-render

  // Select nested data
  const userName = useSelector(state => state.user.profile.name)
  // Safely handle undefined: 
  const userNameSafe = useSelector(state => state.user?.profile?.name)

  // Derived data - filter todos
  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.completed)
  )
  // ⚠️ WARNING: This creates new array every time!
  // Component will re-render on every state change
  // Better to use memoized selectors (covered later)

  // Multiple selectors in same component
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const user = useSelector(state => state.user)
  
  // Conditional rendering based on selected state
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>Please log in</div>

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      <p>Total todos: {todos.length}</p>
      <p>Completed: {completedTodos.length}</p>
    </div>
  )
}
```

### **useSelector Performance Patterns**

```javascript
// ✅ GOOD: Select specific data you need
const todoText = useSelector(state => 
  state.todos.find(todo => todo.id === props.todoId)?.text
)

// ❌ BAD: Select entire object when you only need one property
const todo = useSelector(state => 
  state.todos.find(todo => todo.id === props.todoId)
)
const todoText = todo?.text  // Component re-renders when any todo property changes

// ✅ GOOD: Multiple simple selectors
const todos = useSelector(state => state.todos)
const loading = useSelector(state => state.loading)
const filter = useSelector(state => state.filter)

// ❌ BAD: Select object with multiple properties (creates new object every time)
const data = useSelector(state => ({
  todos: state.todos,
  loading: state.loading,
  filter: state.filter
}))

// ✅ GOOD: Custom equality function for complex comparisons
const todos = useSelector(
  state => state.todos,
  (left, right) => left.length === right.length  // Custom comparison
)
```

## 🚀 **useDispatch Hook - Sending Actions**

### **What is useDispatch?**

`useDispatch` returns the dispatch function from the Redux store. It's like a **messenger** that sends your actions to the store.

### **useDispatch Mindmap**

```
useDispatch Hook
├── Purpose
│   ├── Get Dispatch → Returns store.dispatch function
│   ├── Send Actions → dispatch(action) sends to store
│   ├── Trigger Updates → Actions cause state changes
│   └── Component Updates → State changes trigger re-renders
│
├── Usage Pattern
│   ├── Get Function → const dispatch = useDispatch()
│   ├── Call Function → dispatch(actionObject)
│   ├── Action Creators → dispatch(actionCreator(params))
│   └── Event Handlers → onClick={() => dispatch(action)}
│
├── What Happens When You Dispatch
│   ├── 1. Action Sent → Action goes to all reducers
│   ├── 2. Reducers Run → Each reducer gets (state, action)
│   ├── 3. State Updated → Store state might change
│   ├── 4. Subscribers Notified → Components with useSelector re-render
│   └── 5. UI Updates → React re-renders components with new data
│
├── Action Types
│   ├── Plain Objects → dispatch({ type: 'INCREMENT' })
│   ├── Action Creators → dispatch(increment())
│   ├── Async Actions → dispatch(asyncActionCreator()) (with middleware)
│   └── Multiple Actions → dispatch multiple times
│
└── Best Practices
    ├── Event Handlers → Use in onClick, onSubmit, etc.
    ├── useCallback → Wrap in useCallback for performance
    ├── Action Creators → Prefer action creators over plain objects
    └── Error Handling → Handle async action errors
```

### **useDispatch Examples**

```javascript
import { useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './todosSlice'

function TodoForm() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (text.trim()) {
      // Dispatch action creator
      dispatch(addTodo({
        id: Date.now(),
        text: text.trim(),
        completed: false
      }))
      
      setText('')  // Clear form
    }
  }

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  // Handle toggle with useCallback for performance
  const handleToggle = useCallback(() => {
    dispatch(toggleTodo(todo.id))
  }, [dispatch, todo.id])

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id))
  }, [dispatch, todo.id])

  return (
    <div>
      <span
        onClick={handleToggle}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
```

### **Complete React-Redux Flow Diagram**

```
Component Lifecycle with Redux:

1. COMPONENT MOUNT
   ├── useSelector subscribes to store
   ├── Component gets initial state
   └── Component renders with data

2. USER INTERACTION
   ├── User clicks button
   ├── Event handler called
   └── dispatch(action) called

3. REDUX PROCESSING
   ├── Action sent to all reducers
   ├── Reducers return new state
   ├── Store state updated
   └── Subscribers notified

4. COMPONENT UPDATE
   ├── useSelector detects change
   ├── Component re-renders
   └── UI shows new data

5. COMPONENT UNMOUNT
   └── useSelector unsubscribes from store

Flow Diagram:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Component  │    │ useSelector │    │    Store    │
│   Mount     │───▶│ Subscribe   │◀──▶│    State    │
└─────────────┘    └─────────────┘    └─────────────┘
       │                   ▲                  ▲
       ▼                   │                  │
┌─────────────┐           │           ┌─────────────┐
│    User     │           │           │   Reducer   │
│ Interaction │           │           │  Processes  │
└─────────────┘           │           │   Action    │
       │                  │           └─────────────┘
       ▼                  │                  ▲
┌─────────────┐           │                  │
│ useDispatch │           │           ┌─────────────┐
│   Sends     │───────────┼──────────▶│   Action    │
│   Action    │           │           │
---

```

### **Manual Cache Management**

```javascript
import { useDispatch } from 'react-redux'
import { advancedApiSlice } from './api/advancedApiSlice'

function TodoManager() {
  const dispatch = useDispatch()
  
  // Manual cache updates
  const handleOptimisticUpdate = (todoId, changes) => {
    dispatch(
      advancedApiSlice.util.updateQueryData('getTodos', {}, (draft) => {
        const todo = draft.find(t => t.id === todoId)
        if (todo) {
          Object.assign(todo, changes)
        }
      })
    )
  }
  
  // Invalidate specific cache entries
  const handleInvalidateCache = () => {
    dispatch(advancedApiSlice.util.invalidateTags(['Todo']))
  }
  
  // Prefetch data
  const handlePrefetchTodo = (todoId) => {
    dispatch(advancedApiSlice.util.prefetch('getTodoById', todoId, { force: true }))
  }
  
  // Manual cache operations
  const handleCacheOperations = () => {
    // Reset specific query cache
    dispatch(advancedApiSlice.util.resetApiState())
    
    // Get current cache state
    const cacheState = advancedApiSlice.select(getTodos.select({}))(store.getState())
    console.log('Current cache:', cacheState)
    
    //# 📚 Complete Redux & Redux Toolkit Deep Learning Guide - Part 2

---

# 🛠️ **Chapter 3: Redux Toolkit (RTK) - Modern Redux**

## 🎯 **Why Redux Toolkit?**

Redux Toolkit (RTK) solves the common complaints about Redux being too verbose and complex. It provides:

### **Redux Toolkit Benefits Mindmap**

```
REDUX TOOLKIT BENEFITS
├── Less Boilerplate
│   ├── Auto-generated action creators
│   ├── Built-in immutability with Immer
│   ├── Simplified store setup
│   └── Combined reducer + actions in slices
│
├── Best Practices Built-in
│   ├── Redux DevTools configured
│   ├── Redux-Thunk included
│   ├── Serializable state checks
│   └── Immutability checks in development
│
├── Better Developer Experience
│   ├── TypeScript support out of the box
│   ├── Better error messages
│   ├── Automatic action type generation
│   └── Hot reloading support
│
└── Modern Patterns
    ├── createSlice for feature-based organization
    ├── createAsyncThunk for async operations
    ├── RTK Query for data fetching
    └── Entity adapters for normalized state
```

---

## 🏪 **configureStore - Enhanced Store Setup**

### **configureStore vs createStore**

```javascript
// ❌ OLD WAY: Manual store setup with vanilla Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todosReducer from './todosReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

// ✅ NEW WAY: Redux Toolkit configureStore
import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    user: userSlice.reducer
  }
  // DevTools, thunk, and other middleware automatically included!
})
```

### **configureStore Options Mindmap**

```
configureStore({
  reducer: {...}          // REQUIRED - Root reducer or reducer object
  ├── Object → Combined automatically with combineReducers
  ├── Function → Used as root reducer directly
  └── Example → { todos: todosReducer, user: userReducer }
  
  middleware: [...]       // OPTIONAL - Customize middleware
  ├── Default → [thunk, ...getDefaultMiddleware()]
  ├── Function → (getDefaultMiddleware) => [...middleware]
  ├── Array → Complete replacement of default middleware
  └── Concat → getDefaultMiddleware().concat(customMiddleware)
  
  devTools: boolean      // OPTIONAL - Redux DevTools
  ├── Default → true in development, false in production
  ├── Object → DevTools configuration options
  └── Boolean → Enable/disable DevTools
  
  preloadedState: {}     // OPTIONAL - Initial state
  ├── Purpose → Hydrate store with initial data
  ├── SSR → Server-side rendering state
  └── Persistence → Restored from localStorage
  
  enhancers: [...]       // OPTIONAL - Store enhancers
  ├── Advanced → Custom store enhancers
  ├── Default → Handled automatically
  └── Rare → Most apps don't need custom enhancers
})
```

### **Advanced configureStore Examples**

```javascript
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Custom middleware example
const customLoggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action)
  console.log('Current state:', store.getState())
  const result = next(action)
  console.log('New state:', store.getState())
  return result
}

// Persistence configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'] // Only persist user state
}

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    user: persistReducer(persistConfig, userSlice.reducer)
  },
  
  // Customize middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configure built-in checks
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['persist']
      },
      immutableCheck: { warnAfter: 128 }
    }).concat(customLoggerMiddleware),
  
  // DevTools configuration
  devTools: process.env.NODE_ENV !== 'production' && {
    name: 'My App Store',
    trace: true,
    traceLimit: 25
  }
})

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

---

## 🍰 **createSlice - The Heart of RTK**

### **What is createSlice?**

`createSlice` is a function that accepts an initial state, an object of reducer functions, and a slice name. It automatically generates action creators and action types based on the reducer names.

### **createSlice Anatomy Mindmap**

```
createSlice({
  name: 'sliceName'           // REQUIRED - Slice identifier
  ├── Purpose → Action type prefix
  ├── Example → name: 'todos'
  ├── Action Types → 'todos/addTodo', 'todos/removeTodo'
  └── Unique → Should be unique across all slices
  
  initialState: {...}         // REQUIRED - Initial state value
  ├── Any Type → Object, array, primitive
  ├── Default → First time slice loads
  ├── Example → { items: [], loading: false }
  └── Immutable → Will be made immutable by Immer
  
  reducers: {...}            // REQUIRED - Reducer functions
  ├── Key → Becomes action type (addTodo)
  ├── Function → (state, action) => { /* modify state */ }
  ├── Immer Magic → Can "mutate" state directly
  └── Auto Actions → Action creators generated automatically
  
  extraReducers: {...}       // OPTIONAL - Handle external actions
  ├── Builder Callback → builder => builder.addCase(...)
  ├── External Actions → Actions from other slices
  ├── Async Actions → Handle createAsyncThunk actions
  └── Legacy Object → Map of action types to reducers
})

RETURNS:
├── reducer → Combined reducer function
├── actions → Object with auto-generated action creators
├── name → The slice name
└── getInitialState → Function returning initial state
```

### **Complete createSlice Example**

```javascript
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
  items: [],
  filter: 'all',
  loading: false,
  error: null
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  
  reducers: {
    // Action: { type: 'todos/addTodo', payload: todoObject }
    addTodo: (state, action) => {
      // ✨ IMMER MAGIC: We can "mutate" state directly!
      // Under the hood, Immer creates a new immutable state
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      })
    },
    
    // Action: { type: 'todos/removeTodo', payload: todoId }
    removeTodo: (state, action) => {
      const todoId = action.payload
      state.items = state.items.filter(todo => todo.id !== todoId)
    },
    
    // Action: { type: 'todos/toggleTodo', payload: todoId }
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    // Action: { type: 'todos/setFilter', payload: 'all' | 'active' | 'completed' }
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    
    // Action with custom payload structure
    updateTodo: {
      // Custom payload creator
      prepare: (id, updates) => ({
        payload: { id, updates }
      }),
      // Reducer function
      reducer: (state, action) => {
        const { id, updates } = action.payload
        const todo = state.items.find(todo => todo.id === id)
        if (todo) {
          Object.assign(todo, updates)
        }
      }
    },
    
    // Action: { type: 'todos/clearCompleted' }
    clearCompleted: (state) => {
      state.items = state.items.filter(todo => !todo.completed)
    }
  }
})

// Auto-generated action creators
export const {
  addTodo,
  removeTodo, 
  toggleTodo,
  setFilter,
  updateTodo,
  clearCompleted
} = todosSlice.actions

// Export reducer for store configuration
export default todosSlice.reducer

// Usage in components:
// dispatch(addTodo('Learn Redux Toolkit'))
// dispatch(toggleTodo(123))
// dispatch(updateTodo(123, { text: 'Updated text' }))
```

### **Immer Integration - "Mutable" Updates**

```javascript
// Without Immer (vanilla Redux) - Must be immutable
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]  // New array
      
    case 'TOGGLE_TODO':
      return state.map(todo =>           // New array with new objects
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }  // New object
          : todo
      )
      
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.updates }
          : todo
      )
  }
}

// With Immer (Redux Toolkit) - Can "mutate" directly
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)         // Looks like mutation, but isn't!
    },
    
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed  // Direct "mutation"
      }
    },
    
    updateTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) {
        Object.assign(todo, action.payload.updates)  // Direct assignment
      }
    }
  }
})

// ⚠️ IMPORTANT RULES WITH IMMER:
// 1. Either mutate the state OR return new state, not both
// 2. Can't mutate and return in the same reducer
// 3. Returning undefined means "no change"

// ✅ GOOD: Mutate state
addTodo: (state, action) => {
  state.items.push(action.payload)
}

// ✅ GOOD: Return new state
addTodo: (state, action) => {
  return {
    ...state,
    items: [...state.items, action.payload]
  }
}

// ❌ BAD: Don't mix both patterns
addTodo: (state, action) => {
  state.items.push(action.payload)     // Mutation
  return { ...state, newProp: true }   // And return - DON'T DO THIS!
}
```

---

## 🚀 **createAsyncThunk - Handling Async Operations**

### **What is createAsyncThunk?**

`createAsyncThunk` is a utility that generates action creators and action types for handling asynchronous operations like API calls.

### **createAsyncThunk Mindmap**

```
createAsyncThunk
├── Purpose
│   ├── Async Operations → API calls, timers, file operations
│   ├── Loading States → pending, fulfilled, rejected automatically
│   ├── Error Handling → Built-in error handling patterns
│   └── Action Types → Auto-generates 3 action types per thunk
│
├── Generated Actions (automatically created)
│   ├── pending → 'actionName/pending'
│   ├── fulfilled → 'actionName/fulfilled'
│   └── rejected → 'actionName/rejected'
│
├── Lifecycle
│   ├── 1. Dispatch → dispatch(asyncThunk())
│   ├── 2. Pending → pending action dispatched automatically
│   ├── 3. Execution → payloadCreator function runs
│   ├── 4. Result → fulfilled or rejected action dispatched
│   └── 5. State Update → Handle in extraReducers
│
├── Parameters
│   ├── typePrefix → String identifier for action types
│   ├── payloadCreator → Async function that does the work
│   ├── options → Configuration (condition, dispatchConditionRejection)
│   └── Returns → Thunk action creator function
│
└── Usage Pattern
    ├── Define → createAsyncThunk('name', async (params) => {...})
    ├── Handle → Use extraReducers in slice
    ├── Dispatch → dispatch(asyncThunk(params))
    └── State → Manage loading, data, error states
```

### **Complete createAsyncThunk Example**

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// API simulation
const api = {
  fetchTodos: () => 
    fetch('/api/todos').then(response => {
      if (!response.ok) throw new Error('Failed to fetch')
      return response.json()
    }),
  
  createTodo: (todoData) =>
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoData)
    }).then(response => {
      if (!response.ok) throw new Error('Failed to create')
      return response.json()
    })
}

// Async thunks
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',                    // Action type prefix
  async (_, { rejectWithValue }) => {    // Payload creator function
    try {
      const todos = await api.fetchTodos()
      return todos                       // Becomes action.payload in fulfilled case
    } catch (error) {
      return rejectWithValue(error.message)  // Becomes action.payload in rejected case
    }
  }
)

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoText, { getState, dispatch, rejectWithValue }) => {
    try {
      // Access current state
      const currentUser = getState().user.currentUser
      
      const todoData = {
        text: todoText,
        userId: currentUser.id,
        completed: false
      }
      
      const newTodo = await api.createTodo(todoData)
      
      // Can dispatch other actions
      dispatch(showNotification('Todo created successfully!'))
      
      return newTodo
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Conditional async thunk (won't run if condition fails)
export const fetchTodosIfNeeded = createAsyncThunk(
  'todos/fetchTodosIfNeeded',
  async (_, { getState }) => {
    const { todos } = getState()
    const response = await api.fetchTodos()
    return response
  },
  {
    condition: (_, { getState }) => {
      const { todos } = getState()
      // Don't fetch if already loading or recently fetched
      return !todos.loading && !todos.lastFetch
    }
  }
)

// Slice with async thunk handling
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetch: null
  },
  
  reducers: {
    // Synchronous reducers
    clearError: (state) => {
      state.error = null
    }
  },
  
  extraReducers: (builder) => {
    // Handle fetchTodos
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.lastFetch = Date.now()
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload  // Error message from rejectWithValue
      })
      
    // Handle createTodo
    builder
      .addCase(createTodo.pending, (state) => {
        state.loading = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)  // Add new todo to list
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { clearError } = todosSlice.actions
export default todosSlice.reducer
```

### **Using Async Thunks in Components**

```javascript
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, createTodo, clearError } from './todosSlice'

function TodoApp() {
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText] = useState('')
  
  const { 
    items: todos, 
    loading, 
    error 
  } = useSelector(state => state.todos)

  // Fetch todos on component mount
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleCreateTodo = async () => {
    if (newTodoText.trim()) {
      // createAsyncThunk returns a promise
      const result = await dispatch(createTodo(newTodoText))
      
      if (createTodo.fulfilled.match(result)) {
        setNewTodoText('')
        console.log('Todo created:', result.payload)
      } else {
        console.error('Failed to create todo:', result.payload)
      }
    }
  }

  const handleClearError = () => {
    dispatch(clearError())
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {error && (
        <div style={{ color: 'red' }}>
          Error: {error}
          <button onClick={handleClearError}>Clear</button>
        </div>
      )}
      
      <div>
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={handleCreateTodo} disabled={loading}>
          Add Todo
        </button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
```

### **Advanced createAsyncThunk Patterns**

```javascript
// Thunk with complex payload creator
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (
    { id, updates },                    // Destructured argument
    { getState, dispatch, rejectWithValue, signal }  // ThunkAPI
  ) => {
    try {
      // Check if request was cancelled
      if (signal.aborted) {
        throw new Error('Request was cancelled')
      }

      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
        signal  // Pass abort signal to fetch
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const updatedTodo = await response.json()
      
      // Optimistic update - dispatch synchronous action
      dispatch(todosSlice.actions.optimisticUpdate({ id, updates }))
      
      return updatedTodo
    } catch (error) {
      // Revert optimistic update on error
      dispatch(todosSlice.actions.revertOptimisticUpdate(id))
      
      if (error.name === 'AbortError') {
        return rejectWithValue('Request cancelled')
      }
      
      return rejectWithValue(error.message)
    }
  }
)

// Usage with request cancellation
function TodoComponent() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Dispatch returns a promise with abort method
    const promise = dispatch(fetchTodos())
    
    return () => {
      // Cancel request on unmount
      promise.abort()
    }
  }, [dispatch])
}
```

---

# 🔍 **Chapter 4: Advanced Redux Patterns**

## 📊 **createEntityAdapter - Normalized State Management**

### **What is Entity Normalization?**

Entity normalization stores data in a flat structure with IDs as keys, similar to database tables. This provides:

### **Normalization Benefits Mindmap**

```
ENTITY NORMALIZATION
├── Benefits
│   ├── Performance → O(1) lookups by ID instead of O(n) searches
│   ├── Consistency → Single source of truth for each entity
│   ├── Relationships → Easy to manage entity relationships
│   └── Updates → Efficient updates without searching arrays
│
├── Structure
│   ├── ids: [1, 2, 3] → Array of entity IDs (maintains order)
│   ├── entities: { 1: {}, 2: {}, 3: {} } → Map of ID to entity
│   └── Example → { ids: [1, 2], entities: { 1: {id: 1, name: 'Todo 1'} } }
│
├── Problems It Solves
│   ├── Duplicate Data → Same entity in multiple places
│   ├── Update Complexity → Finding and updating nested entities
│   ├── Performance → Slow array operations for large lists
│   └── Consistency → Keeping related data in sync
│
└── createEntityAdapter
    ├── CRUD Operations → add, update, remove, upsert
    ├── Sorting → Custom sortComparer function
    ├── Selectors → Pre-built selector functions
    └── Reducer → Handles all entity operations
```

### **Complete createEntityAdapter Example**

```javascript
import { 
  createEntityAdapter, 
  createSlice,
  createSelector 
} from '@reduxjs/toolkit'

// Define entity adapter with custom sorting
const todosAdapter = createEntityAdapter({
  // Sort todos by creation date (newest first)
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
  
  // Custom ID selection (if your entities don't have 'id' field)
  selectId: (todo) => todo.todoId  // Optional: default uses 'id' field
})

// Initial state with adapter structure
const initialState = todosAdapter.getInitialState({
  // Additional state properties beyond entities and ids
  loading: false,
  error: null,
  filter: 'all'
})

// Initial state structure:
// {
//   ids: [],
//   entities: {},
//   loading: false,
//   error: null,
//   filter: 'all'
// }

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  
  reducers: {
    // Add single todo
    todoAdded: todosAdapter.addOne,  // Built-in reducer from adapter
    
    // Add multiple todos
    todosReceived: todosAdapter.addMany,
    
    // Update todo
    todoUpdated: todosAdapter.updateOne,  // Expects { id, changes }
    
    // Remove todo
    todoRemoved: todosAdapter.removeOne,
    
    // Custom reducer combining adapter methods with additional state
    todosLoadingStarted: (state) => {
      state.loading = true
      state.error = null
    },
    
    todosLoadingSucceeded: (state, action) => {
      state.loading = false
      // Replace all entities with new data
      todosAdapter.setAll(state, action.payload)
    },
    
    todosLoadingFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    
    // Bulk operations
    completedTodosRemoved: (state) => {
      const completedIds = state.ids.filter(id => 
        state.entities[id].completed
      )
      todosAdapter.removeMany(state, completedIds)
    },
    
    // Upsert (update if exists, add if doesn't)
    todoUpserted: todosAdapter.upsertOne,
    
    // Update multiple
    todosUpdated: todosAdapter.updateMany,  // Expects array of { id, changes }
    
    // Set filter
    filterChanged: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const {
  todoAdded,
  todosReceived,
  todoUpdated,
  todoRemoved,
  todosLoadingStarted,
  todosLoadingSucceeded,
  todosLoadingFailed,
  completedTodosRemoved,
  todoUpserted,
  todosUpdated,
  filterChanged
} = todosSlice.actions

export default todosSlice.reducer
```

### **Entity Adapter Selectors**

```javascript
// Export the adapter's selectors
export const {
  selectIds,        // Returns the ids array
  selectEntities,   // Returns the entities object
  selectAll,        // Returns all entities as array
  selectTotal,      // Returns total count
  selectById        // Returns entity by ID
} = todosAdapter.getSelectors()

// Create root selectors (bound to your slice)
export const selectTodosState = (state) => state.todos

export const selectAllTodos = createSelector(
  [selectTodosState],
  todosState => selectAll(todosState)
)

export const selectTodoById = createSelector(
  [selectTodosState, (state, todoId) => todoId],
  (todosState, todoId) => selectById(todosState, todoId)
)

export const selectTodoIds = createSelector(
  [selectTodosState],
  todosState => selectIds(todosState)
)

// Custom selectors using the base selectors
export const selectActiveTodos = createSelector(
  [selectAllTodos],
  todos => todos.filter(todo => !todo.completed)
)

export const selectCompletedTodos = createSelector(
  [selectAllTodos],
  todos => todos.filter(todo => todo.completed)
)

export const selectFilteredTodos = createSelector(
  [selectAllTodos, selectTodosState],
  (todos, todosState) => {
    switch (todosState.filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
)

export const selectTodoStats = createSelector(
  [selectAllTodos],
  todos => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    active: todos.filter(todo => !todo.completed).length
  })
)
```

### **Using Entity Adapter in Components**

```javascript
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilteredTodos,
  selectTodoById,
  selectTodoStats,
  todoAdded,
  todoUpdated,
  todoRemoved,
  filterChanged
} from './todosSlice'

function TodoList() {
  const dispatch = useDispatch()
  
  // Use the normalized selectors
  const filteredTodos = useSelector(selectFilteredTodos)
  const stats = useSelector(selectTodoStats)
  const { loading, error, filter } = useSelector(state => state.todos)

  const handleAddTodo = (text) => {
    dispatch(todoAdded({
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    }))
  }

  const handleToggleTodo = (id) => {
    dispatch(todoUpdated({
      id,
      changes: { completed: !todo.completed }
    }))
  }

  const handleDeleteTodo = (id) => {
    dispatch(todoRemoved(id))
  }

  const handleFilterChange = (newFilter) => {
    dispatch(filterChanged(newFilter))
  }

  return (
    <div>
      <div>
        Total: {stats.total}, Active: {stats.active}, Completed: {stats.completed}
      </div>
      
      <div>
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => handleFilterChange(filterType)}
            style={{
              fontWeight: filter === filterType ? 'bold' : 'normal'
            }}
          >
            {filterType}
          </button>
        ))}
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <ul>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}  // Pass only ID for performance
            onToggle={() => handleToggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  )
}

// Individual todo component that selects its own data
function TodoItem({ todoId, onToggle, onDelete }) {
  // Only re-renders when THIS todo changes
  const todo = useSelector(state => selectTodoById(state, todoId))
  
  if (!todo) return null

  return (
    <li>
      <span
        onClick={onToggle}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >