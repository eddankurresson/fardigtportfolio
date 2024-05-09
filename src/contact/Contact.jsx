import "./Contact.scss";
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

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
      <motion.div className="textContainer" variants ={textVariants} initial="initial" animate="animate">
          <motion.h2 variants ={textVariants}></motion.h2>
          <motion.h2 variants ={textVariants}> Vill du nå mig?</motion.h2>
          <motion.h1 variants ={textVariants}>edvin@kurtsson.com</motion.h1>
          <motion.div className="buttons" variants ={textVariants}>
        
          </motion.div>
        </motion.div>
      </div>
      <motion.div className= "slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
      edvin@kurtsson.com
      </motion.div>
    
    </div>
  );
};

export default Contact;
