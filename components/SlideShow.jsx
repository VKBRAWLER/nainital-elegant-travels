"use client";
import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
const SlideShow = (params) => {
  const images = params.image;
  const [slideImg, setSlideImg] = useState(images[0]);
  const switchToNextImage = () => {
    const currentIndex = images.indexOf(slideImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setSlideImg(images[nextIndex]);
  };

  const switchToPreviousImage = () => {
    const currentIndex = images.indexOf(slideImg);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSlideImg(images[previousIndex]);
  };

  useEffect(() => {
    const interval = setInterval(switchToNextImage, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slideImg]);
  return (
    <section className='w-full relative'>
      <img src={slideImg} className={`w-full ${params.ratio}`} alt="" />
      <MdNavigateNext onClick={switchToNextImage} className="md:w-10 md:h-10 absolute top-1/2 bg-[var(--CT03)] right-2 rounded-full"/>
      <MdNavigateNext onClick={switchToPreviousImage} className="md:w-10 md:h-10 absolute top-1/2 bg-[var(--CT03)] left-2 rounded-full rotate-180"/>
    </section>
  );
};

export default SlideShow;