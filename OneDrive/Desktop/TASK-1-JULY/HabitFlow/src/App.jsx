import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Addhabits from "./pages/Addhabits";
import Navbar from "./components/Navbar";
import HabitProvider from "./context/HabitContext";

const App = () => {
  return (
    <HabitProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Addhabits" element={<Addhabits />} />
      </Routes>
    </HabitProvider>
  );
};
    // <>
   {/* <div className='dark:bg-teal-900 dark:text-white'>
<Navbar />
<div className='dark:bg-teal-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home />} />
   <Route path='/Addhabits' element={<Addhabits/>}/>
  </Routes>
  </div>
  </div>
  </> */}
  {/* )
} */}

export default App;
