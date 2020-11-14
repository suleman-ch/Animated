import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'



const Anim = () =>{

    const container = useRef(null)

    useEffect(() =>{
        Lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autuPlay: true,
            animationData:require('../anim.json')
        })
    }, [])
    return(
        <>
         <div className="container-fluid mt-5 mb-5" ref={container} >

    </div>
        </>
    )
}

export default Anim;