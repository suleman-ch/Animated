import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Cards from './Cards';
import Roll from 'react-reveal/Flip';



const Contact = () =>{
    useEffect(() =>{
        Aos.init({duration: 3000});
    }, []);
    return(
        <>
            <div> 
            <Roll right>
                <img src="images/n.jpg" style={{width:'100%',marginTop:'71px'}}/>
                </Roll>
            </div>
        <Cards/>
         </>
    )
}

export default Contact;