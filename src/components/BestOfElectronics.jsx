import ProductCard from "./ProductCard";

const products = [
  {
    image: "/projector.webp",
    title: "Projector",
    subtitle: "From ₹6990",
  },
  {
    image: "/samrtWatches.webp",
    title: "Fastrack Smartwatch",
    subtitle: "From ₹1,399",
  },
  {
    image: "/TV.webp",
    title: "Smart TV",
    subtitle: "From ₹40999",
  },
  {
    image: "/TWS.webp",
    title: "Best Truewireless H...",
    subtitle: "Grab Now",
  },
  {
    image: "/monitors.webp",
    title: "Monitors",
    subtitle: "From ₹8000",
  },
  {
    image: "/speakersd.webp",
    title: "Best Speakers",
    subtitle: "From ₹1,099",
  },
];

const BestOfElectronics = () => {
  return (
    <section className="bg-gray-100 p-4">
      <div className="container bg-white p-4 shadow-sm mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Title + Product Scroll */}
          <div className="flex-1 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-5">Best of Electronics</h2>
            <div className="flex overflow-x-auto space-x-5 hide-scrollbar">
              {products.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
          </div>

          {/* Right: Ad Banner (hidden on small screens) */}
          <div className="hidden lg:block w-full lg:w-40 flex-shrink-0">
            <img
              src="/flightBooking.webp"
              alt="Flight Booking Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOfElectronics;
