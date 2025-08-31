import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Login from './pages/Login/Login.jsx'

const re=document.getElementById("root");
const react=ReactDOM.createRoot(re)
react.render(<>
        <App></App>
</>
)