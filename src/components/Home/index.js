import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import Logo from "./Logo"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    const nameArray= "Gurnoor Kaur";
    const jobArray ="A Developer." ;

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span><br/> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}></span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray.split("")} idx={15}/><br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray.split("")} idx={22}/></h1>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>


            </div>
            <Logo/>
        </div>
        </>
    )
}

export default Home