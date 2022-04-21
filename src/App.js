import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes , Route } from 'react-router-dom'
import Showuser from "./components/Showuser";

class App extends Component {
  render() {

      return (
          <div className="App">
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/add/:id" element={<Home/>}/>
                  <Route path="/Showuser" element={<Showuser/>}/>
              </Routes>
          </div>
      );
  }
}

export default App;
