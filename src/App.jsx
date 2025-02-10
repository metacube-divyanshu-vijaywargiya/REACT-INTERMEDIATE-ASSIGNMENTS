import { useEffect, useState } from 'react'
import './App.css'
import StudentForm from './Components/StudentForm.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.js'
import ThemeButton from './Components/ThemeButton.jsx'

function App() {
  const [themeMode , setThemeMode] = useState('light')

  const darkTheme = ()=>{
    setThemeMode('dark');
  }
  
  const lightTheme = () =>{
    setThemeMode('light');
  }

  return(
  <>
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <ThemeButton classList='themebutton'/>
    <StudentForm />
  </ThemeProvider>
  </>
  )
}


export default App
