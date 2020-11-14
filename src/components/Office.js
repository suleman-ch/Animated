import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'




const Office = () =>{

    const container = useRef(null)

    useEffect(() =>{
        Lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autuPlay: true,
            animationData:require('../office_boy.json')
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

export default Office;