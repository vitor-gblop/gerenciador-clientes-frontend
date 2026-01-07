import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/user/_Dashboard'
import Login from './pages/auth/_Login'
import Signin from './pages/auth/_Signin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
