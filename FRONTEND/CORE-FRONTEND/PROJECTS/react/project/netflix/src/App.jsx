import { createContext, useState } from 'react';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import { BrowserRouter, Routes,Route } from "react-router-dom";

const ThemeContext=createContext()
export default function App() {  
  
const [themeval,settheme]=useState({'theme':'black'});
  return (
    <>
  <ThemeContext.Provider value={{themeval,settheme}}> 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home ></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
  </ThemeContext.Provider>
    </>
  )
}
export {ThemeContext} 



// import React, { useCallback, useState } from "react";

// const Child = React.memo(({ onClick }) => {
//   console.log("Child re-rendered!");
//   return <button onClick={onClick}>Click Me</button>;
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   // ❌ Function is recreated on every render
//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   },[]);
//   console.log("parent renrendere")
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }
