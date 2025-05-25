import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from './components/Highlights';

const App = () => {
  return (
    <>
      <main className="bg-black"></main>
      <Navbar />
      <Hero />
      <Highlights />
    </>
  )
}

export default App
