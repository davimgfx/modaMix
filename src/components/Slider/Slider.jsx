import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getCategoriesAndDocumentsCarousel } from "../../utils/firebase/firebase";
import "./Slider.scss";
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get the Products from the Firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const carouselMap = await getCategoriesAndDocumentsCarousel();
      setCarouselData(carouselMap.Carousel);
      console.log(carouselData);
     
      setLoading(true);
    };

    getCategoriesMap();
  }, []);

  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
  };

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
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {carouselData &&
          carouselData.map((img) => (
            <img src={img.imageUrl} alt="image_slider" key={img.id} />
          ))}
      </div>
      <div className="icons">
        <div className="icon-left">
          <ArrowBackIosNew sx={stylesIcons} onClick={prevSlide} />
        </div>
        <div className="icon-right">
          <ArrowForwardIos sx={stylesIcons} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
