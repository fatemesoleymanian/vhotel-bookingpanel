import React, { useState } from "react";
const ListView = ({ className, hotels }) => {
  const hotelss = [
    { coords: [51.36281969540723, 35.69672648316882], price: '$120', name: 'استقلال' , image:'https://www.eghamat24.com/app/public/new_images/600x460/Tehran-ParsianEsteghlal-65.webp',id:'esteghlal' },
    { coords: [51.40081969540723, 35.70672648316882], price: '$150', name: 'اسپیناس' , image:'https://espinashotels.com/wp-content/uploads/2024/02/espinas_palace_about_bg-1.png',id:'espinas' },
    { coords: [51.35081969540723, 35.68672648316882], price: '$100', name: 'المپیک' , image:'https://sarmaafarin.com/wp-content/uploads/2018/12/olympic-hotel.jpg',id:'olymoics' }
  ]
  return (
    <div className={`p-4 ${className}`}>
      <div className="mb-4"> لیست هتل ها</div>
      {/* Sample list items */}
      {hotelss.map((hotel) => {
        return (
          <a href={`book/hotel/${hotel.id}`}>
          <div className="border p-4 mb-2 flex flex-1">
             <img className="w-1/3" src={hotel.image} alt="logo" style={{ height: "5rem", width: "8rem" }} />
            <div className="w-2/3 p-4">{hotel.name}
              <div>{hotel.price}</div>
            </div>
          </div>
          </a>
        )              
      })}
    </div>
  );
};

export default ListView;
