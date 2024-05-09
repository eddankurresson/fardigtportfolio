import { motion } from "framer-motion"
import "./Navbar.scss"
import Sidebar from "../sidebar/sidebar"

const Navbar = () => {
    return (
        
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity:0, scale:0.5}}
                    animate={{ opacity:1, scale:1}}
                    transition={{ duration: 0.5}}
                    >
                Edvin Kurtsson
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/edvin-kurtsson-45509a28b/"><img src="/Linkedin-Logo.png" alt=""/></a>
                    <a href="/EdvinKurtssonCv.pdf"><img src="/cv.png" alt="" style={{width:'36px'}}/></a>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
