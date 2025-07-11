
import React, { useState } from "react";
import WeekComponent from "./WeekComponent";
import MonthlyCalendar from "./MonthlyCalendar";
import YearComponent from "./YearComponent";
import AddHabit from "./AddHabit";
import ProgressChart from "./ProgressChart";

const HabitGrid = ({ habits = [] }) => {
  const [viewMode, setViewMode] = useState("week");

  return (
    <div >
      {/* Tabs */}

      <div className="flex md:flex-row  flex-col gap-2 md:gap-7 rounded-[5px] p-2 mb-6 items-center dark:bg-white dark:text-teal-900">
        <div >
          {["week", "month", "year"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded font-semibold border ${
                viewMode === mode
                  ? "bg-teal-900 text-white"
                  : "bg-white text-teal-950"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
        <div className="md:order-2 order-1">
          <AddHabit />
        </div>
        <div></div>
      </div>

      {viewMode === "week" && <WeekComponent habits={habits} />}
      {viewMode === "month" && <MonthlyCalendar habits={habits} />}
      {viewMode === "year" && <YearComponent habits={habits} />}
      <ProgressChart/>
    </div>
  );
};

export default HabitGrid;

