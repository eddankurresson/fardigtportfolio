import { useRef } from "react"
import "./Parralax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parralax = ({type}) => {

    const ref = useRef()
    const {scrollYProgress}= useScroll({
        target: ref,
        offset:["start start", "end start"]
    })
    const yTex= useTransform(scrollYProgress, [0,1], ["0%", "200%"])
    const yBg= useTransform(scrollYProgress, [0,1], ["0%", "150%"])
    
    return(
        <div className = "parralax" style={{background:type==="Om" ? 
        "linear-gradient(180deg, lightblue, #78C8E5)" : "linear-gradient(180deg, lightblue, #2946FA)" }}>
            <motion.h1 style ={{y: yTex}}>{type === "Om" ? "Vem är jag?" : "Vad har jag gjort?"} </motion.h1>
            <motion.div className="vatten"></motion.div>
            <motion.div style ={{y: yBg}} className="träbåt"></motion.div>
            <motion.div style ={{y: yBg}} className="plastbåt"></motion.div>
            <motion.div style ={{y: yBg}} className="windsurf"></motion.div>
            <motion.div style ={{x: yBg}} className="moln1"></motion.div>
            <motion.div style ={{x: yBg}} className="moln2"></motion.div>

        </div>
    )
}
export default Parralax