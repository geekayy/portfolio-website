import './index.scss'

import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    return (
        <>
             <div className="container contact-page">
             <div className="text-zone">
          <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below information:<br></br>

           <br></br> EMAIL: <a href="mailto:thesocialnoor@gmail.com">thesocialnoor@gmail.com</a><br></br>
           PHONE: <span class="highlight-line">+91 9463440454</span>         
          </p>
          </div>
          </div>
            
        </>
    )
}

export default Contact