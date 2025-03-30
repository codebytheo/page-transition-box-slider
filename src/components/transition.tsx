import {motion} from "motion/react"

const Transition = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <motion.div
      initial={{scale:0.8}}
      animate={{scale:1}}
      exit={{scale:0.8}}
      transition={{duration:0.4,ease:"easeInOut"}}
      >
        {children}
        <motion.div
        animate={{scaleY:0,transition:{duration:0.4,delay:0.4}}}
        exit={{scaleY:1,transition:{duration:0.6,delay:0.25,ease:"easeInOut"}}}
        className='fixed top-0 left-0 z-50 origin-bottom h-screen w-screen bg-zinc-950'
        />
      </motion.div>
    </>
  )
}

export default Transition
