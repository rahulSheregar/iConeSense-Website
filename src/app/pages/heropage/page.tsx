"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";
import { products } from "./products";
const HomePageParallax: React.FC = () => {
  return <HeroParallax products={products} />;
};

export default HomePageParallax;
