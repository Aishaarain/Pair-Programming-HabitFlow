// File: src/context/HabitContext.jsx
import { createContext, useState, useEffect,useMemo } from "react";

export const HabitContext = createContext();

const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
   const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
 const chartData = useMemo(() => {
    const dateMap = {};

    habits.forEach((habit) => {
      Object.entries(habit.progress || {}).forEach(([date, done]) => {
        if (!dateMap[date]) {
          dateMap[date] = { date, completed: 0, total: 0 };
        }
        dateMap[date].total += 1; 
        if (done) dateMap[date].completed += 1;
      });
    });

 

    return Object.values(dateMap).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [habits]);

  
   useEffect(() => {
  fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/today'))
    .then((res) => res.json())
    .then((data) => {
      const parsed = JSON.parse(data.contents);
      setQuote(parsed[0].q);
      setAuthor(parsed[0].a);
    })
    .catch((err) => console.error('Failed to fetch quote:', err));
}, []);


  const [bedtime, setBedtime] = useState(null); // e.g. "22:30"
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits((prev) => [...prev, habit]);

  const toggleHabit = (habitId, date) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              progress: {
                ...habit.progress,
                [date]: !habit.progress[date],
              },
            }
          : habit
      )
    );
  };
  const getTimeUntilBedtime = () => {
    if (!bedtime) return null;
    const [hours, minutes] = bedtime.split(":").map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(hours, minutes, 0, 0);
    if (target < now) target.setDate(target.getDate() + 1); // for next day
    const diff = target - now;
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    return { hours: h, minutes: m };
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        toggleHabit,
        getTimeUntilBedtime,
        bedtime,
        setBedtime,
        quote,
        author,
        chartData
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export default HabitProvider;
