import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 pt-2 w-screen fixed top-0 z-50 text-zinc-950'>
      <h1 className='font-bold text-2xl'>PAGE</h1>
      <div className='flex space-x-40'>
        <Link to="/" className='hover:opacity-50'>home</Link>
        <Link to="/about-us" className='hover:opacity-50'>about-us</Link>
        <Link to="/projects" className='hover:opacity-50'>projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
