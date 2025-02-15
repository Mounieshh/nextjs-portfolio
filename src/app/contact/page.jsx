"use client"

import { motion } from "framer-motion"

const ContactPage = () => {
    return (
      <>
      <motion.div className="h-full" initial={{y : "-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
        Contact Page
    </motion.div>
      </>
    )
  }
  
  export default ContactPage