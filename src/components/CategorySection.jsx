import React from "react";

function CategorySection() {
  const category = [
    { src: "/top-offer.webp", name: "Top offers" },
    { src: "/mobiles.webp", name: "Mobiles & Tablets" },
    { src: "/appliances.webp", name: "TVs & Appliances" },
    { src: "/electronics.png", name: "Electronics" },
    { src: "/fashion.webp", name: "Fashion" },
    { src: "/beauty.webp", name: "Beauty,Foods.." },
    { src: "/home.webp", name: "Home & Kitchen" },
    { src: "/furniture.webp", name: "Furniture" },
    { src: "/travel.webp", name: "Travel" },
    { src: "/grocery.webp", name: "Grocery" },
  ];

  return (
    <div className="mt-2">
      <div className="container bg-white mx-auto px-2">
        {/* mobile view */}
        <div className="grid grid-cols-5 gap-2 px-3 md:hidden">
          {category.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-xs">
              <img
                src={item.src}
                className="w-10 h-10 object-contain"
                alt={item.name}
              />
              <span className="mt-1 text-center">{item.name}</span>
            </div>
          ))}
        </div>
        
        {/* Desktop */}
        <div className="hidden md:flex  overflow-x-auto md:justify-between gap-4 scrollbar-hide">
          {category.map((item, index) => (
            <div
              key={index}
              className="min-w-[90px] md:w-[120px] flex flex-col items-center justify-center"
            >
              <a
                href="#"
                className="flex flex-col overflow-x-auto items-center"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-[60px] object-contain"
                />
                <span className="text-xs md:text-sm font-semibold text-center mt-2">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
