// CarouselComponent.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Corousel() {
  const banners = [
    { src: "/Banner1.webp", alt: "Banner 1" },
    { src: "/banner2.webp", alt: "Banner 2" },
    { src: "/banner3.webp", alt: "Banner 3" },
  ];

  return (
    <div className="container mx-auto shadow-sm mt-4">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        emulateTouch
        showArrows={true}
      >
        {banners.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.alt} className="object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Corousel;
