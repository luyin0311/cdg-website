import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Login from './pages/Login'
import HomePage from './pages/HomePage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
