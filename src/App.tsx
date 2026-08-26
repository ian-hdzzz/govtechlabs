import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage'
import TermsOfServicePage from '@/pages/TermsOfServicePage'
import DataDeletionPage from '@/pages/DataDeletionPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/es/privacidad" element={<PrivacyPolicyPage locale="es" />} />
      <Route path="/en/privacy" element={<PrivacyPolicyPage locale="en" />} />
      <Route path="/es/terminos" element={<TermsOfServicePage locale="es" />} />
      <Route path="/en/terms" element={<TermsOfServicePage locale="en" />} />
      <Route path="/es/eliminacion-de-datos" element={<DataDeletionPage locale="es" />} />
      <Route path="/en/data-deletion" element={<DataDeletionPage locale="en" />} />
      <Route path="/privacidad" element={<Navigate to="/es/privacidad" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
