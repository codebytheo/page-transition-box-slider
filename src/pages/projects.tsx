import Navbar from "../components/nav"
import Transition from "../components/transition"

const Projects = () => {
  return (
    <Transition>
      <Navbar />
      <div className='h-screen bg-zinc-200 text-zinc-950 text-[200px] text-center'>
        <h1>PROJECTS</h1>
      </div>
    </Transition>
  )
}

export default Projects
