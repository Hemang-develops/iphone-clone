import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
function App() {
  const scrollRef = useRef();
  const reactTL = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })
  const [count, setCount] = useState(0)
  useGSAP(() => {
    reactTL.to('.react', { rotation: 45, x: -75, ease: 'power.inOut', duration: 1 })
    reactTL.to('.react', { rotation: 120, y: -150, ease: 'power.inOut', duration: 1 })
    reactTL.to('.react', { rotation: 150, x: 75, ease: 'power.inOut', duration: 1 })
    reactTL.to('.react', { rotation: 180, y: 0, ease: 'power.inOut', duration: 1 })
    reactTL.to('.react', { rotation: 360, x: 0, ease: 'power.inOut', duration: 1 })
    gsap.from('#vite-logo', { y: 20, yoyo: true, repeat: -1, ease: 'power.inOut', duration: 1.5 })
    gsap.to('.box', { y: -20, stagger: { amount: 1, grid: [2, 1], axis: 'y', ease: 'circ.inOut' }, yoyo: true, repeat: -1 })

    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach(box => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 2), rotation: 360, borderRadius: '100%', scale: 1.5, scrollTrigger: {
          trigger: box, start: 'bottom bottom', end: 'top 10%', scrub: true, ease: 'power1.inOut'
        }
      })
    })

    gsap.to('.edit-text', { y: 0, opacity: 1, duration: 1 })
    gsap.fromTo('.read-the-docs', { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 1, stagger: 0.1 })
  }, [])
  return (
    <>
      <div className="boxes flex gap-6 margin mb-14 justify-center">
        <div className="box p-4 bg-sky-200"></div>
        <div className="box  p-4 bg-sky-300"></div>
        <div className="box  p-4 bg-sky-400"></div>
        <div className="box  p-4 bg-sky-500"></div>
        <div className="box  p-4 bg-sky-600"></div>
        <div className="box  p-4 bg-sky-700"></div>
        <div className="box  p-4 bg-sky-800"></div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" id="vite-logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" id='react-logo' alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => { if (reactTL.paused) { reactTL.pause } else { reactTL.play } }} className='margin ml-4'>{reactTL.paused ? 'Pause' : 'Play'}</button>
        <p className='edit-text pt-4 opacity-0'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div className="w-20 h-20 scroll-box bg-pink-500" id="scroll-pink"></div>
        <div className="w-20 h-20 scroll-box bg-orange-500" id="scroll-orange"></div>
      </div>
    </>
  )
}

export default App
