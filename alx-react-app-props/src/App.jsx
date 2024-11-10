import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import { useState } from 'react'
import './App.css'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <Header />
        <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
        <MainContent />
        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
      </div>
    </>
  )
}

export default App
