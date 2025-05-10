import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";

function Corousel() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const banners = [
    { src: "/Banner1.webp", mob: "/mobileBanner1.webp", alt: "Banner 1" },
    { src: "/banner2.webp", mob: "/mobilebanner2.webp", alt: "Banner 2" },
    { src: "/banner3.webp", mob: "/mobilebanner3.webp", alt: "Banner 3" },
  ];

  return (
    <div className="container mx-auto shadow-sm mt-4 p-4">
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
            <img
              src={isMobile ? item.mob : item.src}
              alt={item.alt}
              className={`w-full object-cover ${
                isMobile ? "h-[180px]" : "max-h-[350px]"
              } rounded-2xl`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Corousel;
