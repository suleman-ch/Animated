import React from 'react'
import "@lottiefiles/lottie-player";

const Cycle = () =>{
    return(
        <>
        <div className="">
        <lottie-player src="https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"  
        background="transparent"  
        speed="2"  
        style={{width: '100%',
         height: '600px',
         background:'white'
         }}
           loop autoplay></lottie-player>
        </div>
        </>
    )
}

export default Cycle;