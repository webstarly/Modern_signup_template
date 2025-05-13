import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { SectionContextProvider } from "../src/context/SectionContext";

import Index from "./pages/Index";
import Login from "./pages/login";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Index/>} />
          <Route path="/login" element={< Login />} />
        </Routes>
      </Router>
    </> 
    
  )
}

export default App
