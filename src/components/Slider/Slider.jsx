import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import React, {useState, useEffect} from "react";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import "./Slider.scss";
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)

  const prevSlide = () =>{
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlider((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlider]);

  const stylesIcons = {
    border: "1px solid #34435C64",
    padding: "0.5rem",
    borderRadius: "0.3rem",
    cursor: "pointer",
    fontSize: "3.1rem",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        <img src={slider1} alt="image_slider" />
        <img src={slider2} alt="image_slider" />
        <img src={slider3} alt="image_slider" />
      </div>
      <div className="icons">
        <div className="icon-left">
          <ArrowBackIosNew sx={stylesIcons} onClick={prevSlide}/>
        </div>
        <div className="icon-right">
          <ArrowForwardIos sx={stylesIcons} onClick={nextSlide}/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
