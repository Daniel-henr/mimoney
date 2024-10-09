import { useState } from 'react';
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import History from './components/history';

function App() {
  const  [activeComponent, setActiveComponent] = useState('dashboard')

  const renderActiveComponent = () => {
    switch(activeComponent) {
      case 'dashboard':
       return <Dashboard />
       case 'history':
        return <History />
        default:
         return null
    }
    
  }

  return (
    <div className='transition-colors duration-300 overflow-y-hidden bg-essencial-50 flex font-sans dark:bg-support-950 '>
      <div>
      <Navbar 
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      </div>
      <div className="overflow-hidden">
        {renderActiveComponent()}
      </div>
    </div>

  )
}

export default App
