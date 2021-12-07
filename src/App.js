
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Header from './components/HomePage/Header/Header'
import ServicesPage from './components/ServicesPage/ServicesPage'
import ContactPage from './components/ContactPage/ContactPage'
import ProjectPage from './components/ProjectPage/ProjectPage'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/services" exact element={<ServicesPage />} />
        <Route path="/projects" exact element={<ProjectPage />} />
        <Route path="/contacts" exact element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App