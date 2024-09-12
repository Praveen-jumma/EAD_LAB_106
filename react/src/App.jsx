import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/HelloWorld'
import HelloWorld from './Components/HelloWorld'
import PasswordChecker from './Components/PasswordChecker'
import Timer from './Components/Timer'



function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      
       
      
      <PasswordChecker/>
      <Timer/>
      
    </>
  )
}

export default App
