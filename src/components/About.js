import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Btns from './Btns'
import Reveal from './Reveal' 
import Roll from 'react-reveal/Roll';





const About = () =>{

    useEffect(() =>{
        Aos.init({duration: 3000});
    }, []);
    return(
        <>
        <div>
        <Reveal/>
        <div>
        <Roll right>
        <img data-aos="slide-up" src="images/m.jpg" style={{width:'100%',marginTop:'71px'}}/>
        </Roll>
        </div>
        </div>
        <Btns/>

       





        

        </>

    )
}

export default About;