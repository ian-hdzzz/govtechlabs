import { Routes, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import SolutionsPage from '@/pages/SolutionsPage'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/soluciones" element={<SolutionsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
