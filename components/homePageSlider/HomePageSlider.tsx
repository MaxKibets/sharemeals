import React from "react";

import burgerImg from "@/public/burger.jpg";
import curryImg from "@/public/curry.jpg";
import dumplingsImg from "@/public/dumplings.jpg";
import macncheeseImg from "@/public/macncheese.jpg";
import pizzaImg from "@/public/pizza.jpg";
import schnitzelImg from "@/public/schnitzel.jpg";
import tomatoSaladImg from "@/public/tomato-salad.jpg";

import Slider from "../slider/Slider";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const HomePageSlider: React.FC = () => {
  return <Slider images={images} />;
};

export default HomePageSlider;
