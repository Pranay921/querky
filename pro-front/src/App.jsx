import './App.css'
import Hero from './component/hero'
import Navbar from './component/navbar'
import ScrollCards from './component/ScrollCards'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar></Navbar>
      <Hero />
      <ScrollCards></ScrollCards>
    </div>
  )
}

export default App
