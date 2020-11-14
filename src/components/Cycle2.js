import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'




const Cycle2 = () =>{

    const container = useRef(null)

    useEffect(() =>{
        Lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autuPlay: true,
            animationData:require('../blue-cycle.json')
        })
    }, [])

    return(
        <>
        
       <div className="container-fluid mt-5" ref={container} 
            style={{background:'white',
                    width:'100%',
                    height:'500px',
                    marginBottom:'20px'
            }}>
       </div>
      
      
       

        </>
    )
}

export default Cycle2;