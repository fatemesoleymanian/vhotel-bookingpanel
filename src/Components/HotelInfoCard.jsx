
import React from 'react';

const HotelInfoCard = ({ image, name, price,id }) => {
    const onSeeMore = () => {
        location.href = `book/hotel/${id}`
    }
  return (
    <div className="
      fixed 
      bottom-0 
      md:left-0 
      w-full 
      md:w-auto 
      bg-white 
      shadow-lg 
      flex 
      items-center 
      justify-between 
      p-4 
      md:mb-4 
      md:ml-4 
      mb-0 
      rounded-t-xl 
      md:rounded-none 
      md:rounded-bl-xl 
      md:rounded-br-xl
    ">
      <img 
        src={image} 
        alt={price} 
        className="w-32 h-32 rounded-sm object-cover" 
      />
      <div className="ml-4 p-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{price}</p>

      </div>
      <button 
        onClick={onSeeMore} 
        className="
          bg-purple-500 
          hover:bg-purple-600 
          text-white
          font-bold 
          py-2 
          px-2 
          rounded-md 
          transition 
          duration-300
        "
      >
        مشاهده بیشتر
      </button>
    </div>
  );
};

export default HotelInfoCard;
