import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CountryDetails from './pages/CountryDetails'

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/:name" element={<CountryDetails />} />
  </Routes>
)

export default AppRouter
