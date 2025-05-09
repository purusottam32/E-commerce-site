const ProductCard = ({ product }) => {
    return (
      <div className="w-36 sm:w-40 md:w-44 flex-shrink-0 text-center p-2 hover:shadow-md transition rounded bg-white">
        <img src={product.image} alt={product.title} className="w-full h-28 object-contain mb-2" />
        <p className="text-sm font-medium truncate">{product.title}</p>
        <p className="text-sm font-semibold text-gray-700">{product.subtitle}</p>
      </div>
    );
  };
  
  export default ProductCard;
  