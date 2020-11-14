import React from 'react'
import Typical from 'react-typical'

const Text = () =>{
    return(
        <>
        <div style={{width:'100%',
        height:'700px',
        backgroundImage:`url('images/car.jpg')`,
        }}>
        <h1 className="text-center" style={{color:'whitesmoke'}}>
            TextAnimation
        </h1>
        <h1  className="text-center mt-3 p-5 font-weight-bold" style={{color:'whitesmoke',fontSize:'50px'}}>G7 Technologies❤️ </h1>
        <p  className="text-center font-weight-bold" style={{color:'white',fontSize:'20px'}}>
           We build   
           <Typical
               loop={Infinity}
               wrapper='b'
               steps={[
                   ' Websites  🔳',
                   1000,
                   ' in React  😎',
                   1000,
                   ' ReactNative apps  🚟',
                   1000,
                   ' php sites  🥡',
                   1000,
                   ' node js projects  🧑‍🏫',
                   1000,
               ]}
           /> 
        </p>
        </div>
        </>
    )
}

export default Text;