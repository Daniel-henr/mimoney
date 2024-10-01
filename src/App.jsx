import { useState } from 'react'
import Dashboard from './pages/dashboard'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='transition-colors duration-300 bg-essencial-50 flex font-sans dark:bg-support-950 '>
      <div>
      <Navbar />
      </div>
      <Dashboard />
    </div>

  )
}

export default App
