"use client"

import {motion} from 'framer-motion'
const TestPage = () => {

    const variants = {
        variant1 : {x : -100 , opacity : 0},
        variant2 : {x : 200 , opacity : 0.3, rotate : 90}
    }
  return (
    <>
    <div className='h-full flex items-center justify-center'>
        <motion.div 
        className='w-72 h-72 bg-blue-400'
        initial={variants.variant1}
        animate={variants.variant2}
        transition={{delay : 0.3 , duration: 1}}
        >

        </motion.div>
    </div>
    </>
  )
}

export default TestPage