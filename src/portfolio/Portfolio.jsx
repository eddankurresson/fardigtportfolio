import "./Portfolio.scss"
import React, { useRef } from 'react';
import {motion,useScroll, useSpring, useTransform} from "framer-motion"
const items = [
    {
        id: 1,
        title: "Svensk Husman",
        img: "/husmangubbe.png",
        desc: "I ett spännande projekt i samarbete med Svensk Husman fick jag möjligheten att bidra till utvecklingen av ett webbspel, Fikaspelet, vars syfte är att marknadsföra mot nya kunder och erbjuda en tävling med vinster och rabattkoder. Spelet engagerar spelaren genom att styra en skidåkande lussebulle som undviker hinder som träd och stenar, samtidigt som den samlar poäng och upptäcker rabatter. Fikaspelet utvecklades med användning av Phaser, ASP.NET Core och React.",
        link:"https://husmanspel.se",
    },
    {
        id: 2,
        title: "Nästa Projekt",
        img: "/sitterogarvar.png",
        desc: "Här kommer nästa uppgift ",
        link:"",
    }
  
]
const Single = ({ item }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        //offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1],[-250,250]);

    return (
      <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref = {ref}>
                <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}} >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link}>
                    <button>Läs mer</button>
                 </a>
            </motion.div>
          </div>
          </div>
      </section>
    );
  };
  

  const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Portfolio</h1>
                <motion.div style={{ scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
};

export default Portfolio
