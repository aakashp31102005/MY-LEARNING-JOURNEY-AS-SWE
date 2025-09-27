import Home from "./Pages/Home/Home"
import './App.css'
import{BrowserRouter,Link,Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" preventScrollReset element={<h1>login</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;