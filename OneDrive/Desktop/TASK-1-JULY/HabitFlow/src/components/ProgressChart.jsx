
import  { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function HabitBarChart() {
  const { chartData } = useContext(HabitContext);



  return (
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow mt-8 max-w-4xl mx-auto">
    
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
        Daily Habit Progress
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#d1d5db" name="Total Habits" />
          <Bar dataKey="completed" fill="#14b8a6" name="Completed Habits" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
