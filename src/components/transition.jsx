"use client"

import { motion, AnimatePresence, easeOut, delay } from 'framer-motion'
import NavBar from '../components/navbar'
import { usePathname } from 'next/navigation'


const TransitionProvider = ({children}) => {

    const pathName = usePathname();
  return (
    <>
    <AnimatePresence mode='wait'>
    <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-50">
        <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
        animate={{height : "0vh"}}
        exit={{height : "100vh"}}
        transition={{duration : 0.4 , ease : easeOut}}
        />
        <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
        initial={{opacity : 1}}
        animate={{opacity : 0}}
        exit={{opacity : 0}}
        transition={{duration : 0.4 , ease : easeOut}}
        >
            {pathName.substring(1)}
        </motion.div>

        <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
        initial={{height : "120vh"}}
        animate={{height : "0vh" , transition : {delay : 0.4}}}
        />
        <div className="h-24">
          <NavBar/>
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
    </div>
    </AnimatePresence>
    </>
  )
}

export default TransitionProvider