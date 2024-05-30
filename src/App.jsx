/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import StudentsTeam from './pages/StudentsTeam/StudentsTeam'
import FacultyTeam from './pages/FacultyTeam/FacultyTeam'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import PageFooter from './components/PageFooter/PageFooter'
import Collaborations from './pages/Collaborations/Collaborations'
import News from './pages/News/News'
import Events from './pages/Events/Events'
import Publications from './pages/Publications/Publications'
import OptionManager from './components/OptionManager/OptionManager'
import ResourceDevLab from './pages/ResourceDevLab/ResourceDevLab'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Header />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='collaborations' element={<Collaborations />} />
          <Route path='faculty-team' element={<FacultyTeam />} />
          <Route path='students-team' element={<StudentsTeam />} />
          <Route path='news' element={<News />} />
          <Route path='events' element={<Events />} />
          <Route path='publications' element={<Publications />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='resource-development-lab' element={<ResourceDevLab />} />
          <Route path='home/RDL' element={<OptionManager h="100vh" w="100vw" bc="white" bbsize="50px" />} />
        </Routes>
        <PageFooter />
      </div>
    </>
  )
}

export default App
