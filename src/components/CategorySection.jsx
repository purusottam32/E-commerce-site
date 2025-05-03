import React from "react";

function CategorySection() {
  const category=[{src:"/top-offer.webp",name:"Top offers"},
{src:"/mobiles.webp",name:"Mobiles & Tablets"},
{src:"/appliances.webp",name:"TVs & Appliances"},
{src:"/electronics.png",name:"Electronics"},
{src:"/fashion.webp",name:"Fashion"},
{src:"/beauty.webp",name:"Beauty,Foods.."},
{src:"/home.webp",name:"Home & Kitchen"},
{src:"/furniture.webp",name:"Furniture"},
{src:"/travel.webp",name:"Travel"},
{src:"/grocery.webp",name:"Grocery"}]
  return (
    <div className=" mt-2">
      <div className="container bg-white flex mx-auto justify-between items-center">
       {
        category.map((item,index)=>(
          <div className="h-[130px] w-[126px] flex flex-col items-center justify-center">
          <a href="#" className="flex flex-col">
            <img
              src={item.src}
              alt={item.name}
              className="h-[60px] object-contain mx-auto"
            />
            <span className="text-sm font-bold text-center mt-2">{item.name}</span>
          </a>
        </div>
        )
       )}
      </div>
    </div>
  );
}
export default CategorySection;
