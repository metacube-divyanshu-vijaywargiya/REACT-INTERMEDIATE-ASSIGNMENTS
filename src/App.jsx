import { Suspense, useState }  from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
//lazy loading form
const StudentForm = React.lazy(()=> import('./Components/StudentForm.jsx'))
import { ThemeProvider } from './Contexts/ThemeContext.js'
import ThemeButton from './Components/ThemeButton.jsx'
import StudentsTable from './Components/StudentsTable.jsx'
import useFetchStudents from './CustomHooks/useFetchStudents.jsx'
import ErrorBoundary from './Components/ErrorBoundary.jsx'
import PostTable from './Components/PostTable.jsx'

function App() {
  const [themeMode , setThemeMode] = useState('light')
  const {data} = useFetchStudents();
  console.log(data);
  
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
    <div className={themeMode === 'dark' ? 'bg-main-dark' : 'bg-main-light'}>
    {/* Wrapping the lazy loaded component in suspense , so that we can show fallback text while loading of that component */}
    <Suspense fallback={<div>Loading....</div>}>
    <ErrorBoundary fallback={<div>Error occured while loading form</div>}>
      <StudentForm />
    </ErrorBoundary>
      <StudentsTable/>
      <PostTable/>
    </Suspense>
    </div>
  </ThemeProvider>
  </>, 
  document.getElementById('portal-root')
  )
}


export default App
