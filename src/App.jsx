import { Navbar } from "@/layouts/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"
import {Skills} from "@/sections/Skills"
import {Footer} from "@/layouts/Footer"
import {Achievements} from "@/sections/Achievements"



function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        
        <Contact />
      </main>
      <Footer />
    </div>
    
  )
}

export default App
