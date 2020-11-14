import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import Anim from './Anim'
import Cycle from './Cycle'
import Num from './Num'
import Num2 from './Num2'
import Cycle2 from './Cycle2'
import Office from './Office'
import {motion} from 'framer-motion'



const LottieReact = () =>{

    const container = useRef(null)

    useEffect(() =>{
        Lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autuPlay: true,
            animationData:require('../ofc.json')
        })
    }, [])

    return(
        <>
       <div style={{marginTop:'100px'}}>
          <motion.h1 animate={{fontSize:'70px', color:'#17A2B8'}}>
              Animations
          </motion.h1>
      </div>


       <div className="container-fluid mt-5" ref={container} style={{background:'black',}}>
       <h2 style={{color:'#1CE5FF',
                   marginLeft:'120px',
                   fontSize:'70px',

        }}>G7❤️ Technologies</h2>
       </div>
       <Anim/>

            {/* Cycle */}
        <div className="col-md-12" style={{backgroundColor:'white'}}>
            <div className="col-md-6">
                <Cycle/>
            </div>
            <div className="col-md-6">
                <Cycle2/>
            </div>
      </div>

            {/* Num */}

       <div className="col-md-12" style={{backgroundColor:'black',height:'700px'}}>
        <div className="col-md-8">
            <Num/>
        </div>
        <div className="col-md-4">
            <Num2/>
        </div>
      </div>

      <div className="" style={{backgroundColor:'white'}}>
          <Office/>
      </div>


      
     
     

        </>
    )
}

export default LottieReact;


// https://www.youtube.com/watch?v=LIoRZZ_va_o