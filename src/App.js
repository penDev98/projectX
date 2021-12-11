
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Header from './components/HomePage/Header/Header'
import ServicesPage from './components/ServicesPage/ServicesPage'
import ContactPage from './components/ContactPage/ContactPage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import BlogPage from './components/BlogPage/BlogPage'
import ArticlePage from './components/BlogPage/ArticlePage/ArticlePage'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/services" exact element={<ServicesPage />} />
        <Route path="/projects" exact element={<ProjectPage />} />
        <Route path="/contacts" exact element={<ContactPage />} />
        <Route path="/blog" exact element={<BlogPage />} />
        <Route path="/blog/article" exact element={<ArticlePage />} />

      </Routes>
    </div>
  )
}

export default App