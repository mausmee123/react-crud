import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route, } from "react-router-dom";
import Adduser from "./components/user/Adduser";
import Showuser from "./components/user/Showuser";
import Edituser from "./components/user/Edituser";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/adduser" element={<Adduser />} />
                <Route path="/user/update/:id" element={<Edituser />} />
                <Route path="/user/showuser" element={<Showuser />} />
            </Routes>
        </div>
    );
}

export default App;
