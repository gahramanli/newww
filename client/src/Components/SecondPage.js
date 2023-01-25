import React from 'react'
import './SecondPage.css'


import imageb4 from "./images/b4.jpg";
function SecondPage() {
  return (
    <>  
        <div className='ourpage'>
            <div className='f1rst'>
                <p><i>Devoted to wonderful beauty</i></p>
                <h1>Our Portfolio</h1>
            </div>
            <div className='s2cond'>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
            
                
            </div>
            <div className='s2cond'>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
                <div className='cards'>
                    <img src={imageb4} alt='image'></img>
                    <h1>Dahlia</h1>
                    <h2>$45</h2>
                </div>
            
                
            </div>
            



            
        </div>
        
    
    </>
  )
}

export default SecondPage