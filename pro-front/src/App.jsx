import './App.css'
import Hero from './component/hero'
import Navbar from './component/navbar'
import ScrollCards from './component/ScrollCards'
import Slideshow from './component/slideShow'
import Trending from './component/Trending'
import Timer from './component/Timer'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollCards />
      <Slideshow />
      <Trending></Trending>
      <Timer />
    </div>)
}

export default App
