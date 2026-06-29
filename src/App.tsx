import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/es/privacidad" element={<PrivacyPolicyPage locale="es" />} />
      <Route path="/en/privacy" element={<PrivacyPolicyPage locale="en" />} />
      <Route path="/privacidad" element={<Navigate to="/es/privacidad" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
