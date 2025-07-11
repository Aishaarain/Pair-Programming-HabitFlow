
import React from "react";

import HabitGrid from "./Habitgrid"
import HabitSidebar from "./Habitsidebar"
import { useState } from "react";
import GreetingHeader from "./GreetingHeader";
import Quote from "./quoteapi"

const HabitDashboard = ( {habits}  )=>{
   const [viewMode, setViewMode] = useState("week");
  return (<>
     <Quote className="dark:bg-teal-900"/>
    <div className="bg-white text-teal-900 rounded-2xl shadow-xl max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-8 dark:bg-teal-900 dark:text-white">
      
      <div className="flex-1 ">
       
        <GreetingHeader/>
        <HabitGrid   habits={habits} viewMode={viewMode}/>
      </div>
      <HabitSidebar habits={habits}/>
    </div>
    </>
  );
};


export default HabitDashboard;
