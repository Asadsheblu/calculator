import React, { useEffect } from "react";
import Calculator from "./features/calculator/Calculator";
import Toggle from "./features/toggle/Toggle";
import { selectToggle } from "./features/toggle/toggleSlice";
import { useSelector } from "react-redux";
import { variablesLightMode, variablesDarkMode } from "./data/variables";
import { setRootVariables } from "./common/utils";
import Stopwatch from "./features/Stopwatch/Stopwatch";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./features/Stopwatch/Navbar/Navbar";
function App() {
  const toggleState = useSelector(selectToggle);

  useEffect(
    () => {
      if (!toggleState) {
        setRootVariables(variablesDarkMode);
      } else {
        setRootVariables(variablesLightMode);
      }
    },
    [toggleState]
  );
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="calculator-container">
        <Toggle />
        <Calculator />
        
      </div>}>

        </Route>
        <Route path="watch" element={<Stopwatch />}>

        </Route>
      </Routes>
      
      
      
    
    </div>
  );
}

export default App;
