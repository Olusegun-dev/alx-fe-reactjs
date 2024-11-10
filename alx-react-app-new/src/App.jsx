import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <MainContent />
        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Counter />
        <Footer />
      </div>
      
    </>
  )
}

export default App
