

const features = [
  {
    title: 'Track Daily Habits',
    desc: 'Log and monitor your daily routines easily.',
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Visual Progress',
    desc: 'See your streaks with intuitive graphs.',
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 3v18h18M3 12h18M12 3v18" />
      </svg>
    ),
  },
  {
    title: 'Custom Reminders',
    desc: 'Never miss a habit with timely alerts.',
    icon: (
      <svg
        className="w-8 h-8 text-yellow-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

    ),
    img:'/img.png'
  },
];


const Features = () => {
  return ( 
  <section className="py-5 bg-white dark:bg-teal-900 dark:text-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:bg-teal-900 dark:text-white">
          Experience Your Habit Flow
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto dark:bg-teal-900 dark:text-white">
          From planning to tracking, HabitFlow guides you every step of the way to build lasting habits.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300  dark:bg-teal-50"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-2 text-gray-800">{f.desc}</p>
               <div className="mt-4">
        <img
          src={f.img}
          alt="feature"
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
            </div>
             
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features