import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import { Routes, Route, } from "react-router-dom";
import Adduser from "./components/user/Adduser";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/adduser" element={<Adduser />} />
            </Routes>
        </div>
    );
}

export default App;
