"use client";

import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

import css from "./styles/slider.module.css";

type ImageProps = {
  image: StaticImageData;
  alt: string;
};

type ImageSliderProps = {
  images: ImageProps[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.slider}>
      {images.map(({ image, alt }, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={alt}
          className={index === currentImageIndex ? css.active : ""}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
