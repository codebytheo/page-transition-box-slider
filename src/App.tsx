import {Routes,Route, useLocation} from "react-router"
import Home from "./pages/home"
import AboutUs from "./pages/about-us"
import Projects from "./pages/projects"
import { AnimatePresence } from "motion/react"

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
