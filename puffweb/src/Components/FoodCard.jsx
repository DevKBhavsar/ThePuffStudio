import React, { useContext, useState } from "react";


const FoodCard = ({ item }) => {



  return (
    <div
     className="cursor-pointer rounded-2xl shadow-orange-200 hover:shadow-2xl hover:scale-105 
     duration-500 shadow-lg">
      {/* food container */}    
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="flex p-2 flex-col gap-2 items-start">
        <h2 className="md:text-2xl lg:text-xl font-bold border-b border-b-gray-300">
          {item.name}
        </h2>
        <p className="text-sm">Price: <b>{item.price}</b></p>
      </div>
    </div>
  );
};

export default FoodCard;
