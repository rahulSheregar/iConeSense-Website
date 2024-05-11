"use client";
import React from "react";
import { HeroParallax } from "../../ui/hero-parallax";
import { products } from "./products";
const HomePageParallax: React.FC = () => {
  return <HeroParallax products={products} />;
};

export default HomePageParallax;
