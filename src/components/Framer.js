import React from 'react'
import {motion} from 'framer-motion'

const containerVariants ={
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x:0,
        transition:{
            type:'spring',
            deley:'0.5'
        }
    }
}

const Framer = () =>{
    return(
        <>
        <motion.div className="container order" style={{marginTop:'70px'}}
            variants={containerVariants}
            initial="hidden"
            animate="visible">

        <img src="images/m.jpg"  style={{width:'500px', height:'300px'}}/>
        <h1>wellcome</h1>
        </motion.div>
       
        </>
    )
}
export default Framer;