import React, { useRef } from "react";
import { products } from "../products";

export default function ProductCarousel() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // adjust how much to scroll per click
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        &#10094;
      </button>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        &#10095;
      </button>

      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-hidden px-4 py-4 scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] flex-shrink-0 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 font-bold text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
