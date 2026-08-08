import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Process } from './components/Process'
import { Analytics } from './components/Analytics'
import { About } from './components/About'
import { Reviews } from './components/Reviews'
import { Areas } from './components/Areas'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'

function App() {
  return (
    <main className="font-lato bg-[#0B0B0B] text-[#F2F2F2]">
      <Hero />
      <WhyUs />
      <Process />
      <Analytics />
      <About />
      <Reviews />
      <Areas />
      <FAQ />
      <Contact />
    </main>
  )
}

export default App
