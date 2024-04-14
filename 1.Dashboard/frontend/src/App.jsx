import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './hooks/useAuthContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import SearchPage from './pages/SearchPage'
import HistoryPage from './pages/HistoryPage'
import ContactPage from './pages/ContactPage'
// import JobsPage from './pages/JobsPage'
// import CareerPage from './pages/CareerPage'
// import JobForm from './components/JobForm'
// import JobDataPage from './pages/JobDataPage'
// import JobOpening from './pages/JobOpening'
// import ApplicationPage from './components/ApplicationPage'
// import Page from '../src/resume-parser/page'

function App() {
  const { user } = useAuthContext();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', localStorage.getItem('theme') || theme);
    setTheme(localStorage.getItem('theme') || theme);
  }, [theme]);

  return (
    <div>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/dashboard' />} />
            <Route path='/signup' element={!user ? <SignupPage /> : <Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={user ? <DashboardPage /> : <Navigate to='/login' />} />
            <Route path='/search' element={!user ? <LoginPage /> : <SearchPage theme={theme} />} />
            <Route path='/history' element={!user ? <LoginPage /> : <HistoryPage />} />
            <Route path='/contact' element={<ContactPage />} />
            {/* <Route path='/jobs' element={!user ? <JobsPage /> : <Navigate to='/login' />} />
            <Route path='/career' element={<CareerPage/>}/>
            <Route path='/jobform' element={!user ? <JobForm /> : <Navigate to='/login' />} />
            <Route path='/jobapplication' element={!user ? <JobDataPage /> : <Navigate to='/login' />} />
            <Route path='/jobopenings' element={!user ? <ApplicationPage /> : <Navigate to='/login' />} />
            <Route path='/resume-parser' element={!user ? <Page /> : <Navigate to='/login' />} /> */}
          </Routes>
        </div>
      </BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App