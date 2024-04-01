"use client";
import { useState, useEffect } from "react";
const SlideShow = (params) => {
  const images = params.image;
  const [slideImg, setSlideImg] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(slideImg);
      const nextIndex = (currentIndex + 1) % images.length;
      setSlideImg(images[nextIndex]);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slideImg]);
  return (
    <section className='w-full'>
      <img src={slideImg} className={`w-full ${params.ratio}`} alt="" />
    </section>
  );
};

export default SlideShow;