
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Header from './components/HomePage/Header/Header'
import ServicesPage from './components/ServicesPage/ServicesPage'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/services" exact element={<ServicesPage />} />
      </Routes>
    </div>
  )
}

export default App