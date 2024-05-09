
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.scss";

const Slideshow = () => {
    const sliderRefLeft = useRef(null);
    const sliderRefRight = useRef(null);
    const [currentSlideLeft, setCurrentSlideLeft] = useState(0);
    const [currentSlideRight, setCurrentSlideRight] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (sliderRefLeft.current && sliderRefRight.current) {
            const length = sliderRefLeft.current.innerSlider.props.children.length;
            setCurrentSlideRight(length - 1); // Set the right slider to the last slide initially

            const id = setInterval(() => {
                setCurrentSlideLeft(prev => (prev + 1) % length);
                setCurrentSlideRight(prev => (prev - 1 + length) % length); // Move right slider in opposite direction
            }, 1500);
            setIntervalId(id);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [sliderRefLeft, sliderRefRight]);

    useEffect(() => {
        if (sliderRefLeft.current) {
            sliderRefLeft.current.slickGoTo(currentSlideLeft);
        }
        if (sliderRefRight.current) {
            sliderRefRight.current.slickGoTo(currentSlideRight);
        }
    }, [currentSlideLeft, currentSlideRight]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipe: false,
        arrows: false
    };

    return (
        <div style={{ display: 'flex', height: '100vh',padding:'20px', alignItems: 'center', justifyContent: 'space-around' }}>
            <div style={{padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} className="sistapillen">
                <h1>Vem är jag?</h1>
                <p>Hej! Edvin heter jag och är en positiv och glad kille från Nynähsamn. Jag har ett stort intresse för teknik och älskar att jobba med människor. På fritiden gillar jag att få pröva på och hålla på med så många roliga saker som möjligt men jag har också ett väldigt stort båtintresse.</p>
            </div>
            <div style={{ width: '80%',paddingLeft:'20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Slider ref={sliderRefLeft} {...settings} className="left-slider" style={{ padding: 0,}}>
                <div><img src="/bilder/bibop.png" alt="Image 23" /></div>
                <div><img src="/bilder/bibop22.jpg"   alt="Image 22" /></div>
                <div><img src="/bilder/bibop21.jpg"   alt="Image 21" /></div>
                <div><img src="/bilder/bibop20.jpg"   alt="Image 20" /></div>
                <div><img src="/bilder/bibop19.jpg"   alt="Image 19" /></div>
                <div><img src="/bilder/bibop17.jpg"   alt="Image 17" /></div>
                <div><img src="/bilder/bibop15.jpg"   alt="Image 15" /></div>
                <div><img src="/bilder/bibop13.jpg"   alt="Image 13" /></div>
                <div><img src="/bilder/bibop11.jpeg"   alt="Image 11" /></div>
                <div><img src="/bilder/bibop10.jpeg"   alt="Image 10" /></div>
                <div><img src="/bilder/bibop9.jpeg" alt="Image 9" /></div>
                <div><img src="/bilder/bibop8.jpg"   alt="Image 8" /></div>
                <div><img src="/bilder/bibop7.jpg"   alt="Image 7" /></div>
                <div><img src="/bilder/bibop6.png"   alt="Image 6" /></div>
                <div><img src="/bilder/bibop5.jpg"   alt="Image 5" /></div>
                <div><img src="/bilder/bibop4.png"   alt="Image 4" /></div>
                <div><img src="/bilder/bibop3.png"  alt="Image 3" /></div>
                <div><img src="/bilder/bibop2.png"  alt="Image 2" /></div>
                <div><img src="/bilder/bibop1.png" alt="Image 1"   /></div>
                
                </Slider>
                <Slider ref={sliderRefRight} {...settings} className="right-slider" style={{ padding: 0}}>
                <div><img src="/bilder/bibop1.png"    alt="Image 1" /></div>
                <div><img src="/bilder/bibop2.png" alt="Image 2" /></div>
                <div><img src="/bilder/bibop3.png"alt="Image 3" /></div>
                <div><img src="/bilder/bibop4.png"    alt="Image 4" /></div>
                <div><img src="/bilder/bibop5.jpg"   alt="Image 5" /></div>
                <div><img src="/bilder/bibop6.png"   alt="Image 6" /></div>
                <div><img src="/bilder/bibop7.jpg"   alt="Image 7" /></div>
                <div><img src="/bilder/bibop8.jpg"   alt="Image 8" /></div>
                <div><img src="/bilder/bibop9.jpeg"  alt="Image 9" /></div>
                <div><img src="/bilder/bibop10.jpeg"   alt="Image 10" /></div>
                <div><img src="/bilder/bibop11.jpeg"   alt="Image 11" /></div>
                <div><img src="/bilder/bibop13.jpg"   alt="Image 13" /></div>
                <div><img src="/bilder/bibop15.jpg"   alt="Image 15" /></div>
                <div><img src="/bilder/bibop17.jpg"   alt="Image 17" /></div>
                <div><img src="/bilder/bibop19.jpg"   alt="Image 19" /></div>
                <div><img src="/bilder/bibop20.jpg"   alt="Image 20" /></div>
                <div><img src="/bilder/bibop21.jpg"   alt="Image 21" /></div>
                <div><img src="/bilder/bibop22.jpg"   alt="Image 22" /></div>
                <div><img src="/bilder/bibop.png"  alt="Image 23" /></div>
                </Slider>
            </div>
        </div>
    );
};

export default Slideshow;
