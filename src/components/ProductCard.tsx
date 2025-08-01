import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  console.log(title, price, image, "props");

  return (
    <div className="p-4 border h-full rounded flex flex-col justify-center items-center shadow hover:scale-105 transition-transform">
      <img src={image} alt={title} className="h-40 object-contain mb-2" />
      <h3 className="font-semibold text-center line-clamp-2">{title}</h3>
      <p>${price?.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
