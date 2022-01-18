import React, { useState } from "react";
import CardPlan from "./CardPlan";

const plans = [
  { id:1,
    title: "Standar Edition", 
    description: [
                "Elden Ring",
                "Adventure Guide",
                "Bonus Gesture"], 
    price: 69.99,
    img: '/img-plan1.png' },
    { id:2,
    title: "Deluxe Edition", 
    description: [
                "Elden Ring",
                "Digital Artbook & Original",
                "Adventure Guide",
                "Bonus Gesture"], 
    price: 89.99,
    img: '/img-plan2.png'  },
];

export const Plans = () => {
  return (
    <div className="container mx-8 mt-2 mb-2">
        <div className="title mt-4 mb-4">
            <h3 className="text-xl">Planes</h3>
        </div>
        <div className="list-cards">
            {plans.map((item)=>(
                <CardPlan key={item.title} plan={ item }/>))}
        </div>
    </div>
  );
};
