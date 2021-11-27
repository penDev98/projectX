
import './App.scss'
import Header from './components/Header/Header'
import OfferedServices from './components/OfferedServices/OfferedServices'
import Team from './components/Team/Team'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-img'></div>
      <Team/>
      <OfferedServices/>
    </div>
  )
}

export default App