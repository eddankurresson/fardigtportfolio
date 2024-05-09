import "./Hero.scss";
import { motion } from "framer-motion";
const textVariants ={
  initial:{
    x: -500,
    opacity:0,

  },
  animate:{
    x: 0,
    opacity:1,
      transistion:{
        duration:1,
        staggerChildren:0.1,
      },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {  // Corrected typo here
      duration: 2,
      repeat: Infinity,  // Correct usage
      repeatType: "loop"  // Added repeatType for clarity
    },
  },
};

const sliderVariants ={
  initial:{
    x: 0,

  },
  animate:{
    x: "-220%",
    opacity:1,
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:20,
      },
  },
  
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants ={textVariants} initial="initial" animate="animate">
          <motion.h2 variants ={textVariants}>CIVILINGENJÖRSSTUDENT</motion.h2>
          <motion.h2 variants ={textVariants}> INTERAKTION OCH DESIGN</motion.h2>
          <motion.h1 variants ={textVariants}>EDVIN KURTSSON</motion.h1>
          <motion.div className="buttons" variants ={textVariants}>
        
          </motion.div>
          <motion.img src="/scroll.png" animate="scrollbutton" alt="" variants ={textVariants} />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/test4grupp1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
