import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center'>
      <div className='text-center px-4'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-white mb-6'>
          Welcome to pettty
        </h1>
        <p className='text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto'>
          This is your new AI-built playground. Describe your dream UI and Chippy will design and code it for you in real time.
        </p>
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl inline-block'>
          <button
            onClick={() => setCount((c) => c + 1)}
            className='px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-xl transition-all'
          >
            Count is {count}
          </button>
        </div>
        <p className='text-purple-300 mt-6 text-sm'>
          Ask Chippy to turn this into a full product site, dashboard, or portal ✨
        </p>
      </div>
    </div>
  )
}

export default App
