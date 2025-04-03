import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import ScrollToTop from './components/ScrollToTop'
import StartPage from './pages/StartPage';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/start" element={<StartPage />} />

      </Routes>
    </>
  )
}

export default App
