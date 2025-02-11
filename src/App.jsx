import { Suspense, useState }  from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
//lazy loading form
const StudentForm = React.lazy(()=> import('./Components/StudentForm.jsx'))
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

  return ReactDOM.createPortal(
  <>
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <ThemeButton classList='themebutton'/>
    {/* Wrapping the lazy loaded component in suspense , so that we can show fallback text while loading of that component */}
    <Suspense fallback={<div>Loading....</div>}>
      <StudentForm />
    </Suspense>
  </ThemeProvider>
  </>, 
  document.getElementById('portal-root')
  )
}


export default App
