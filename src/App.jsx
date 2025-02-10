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

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', "light");
    document.querySelector('html').classList.add(themeMode);
    console.log(themeMode)
  },[themeMode]);

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
