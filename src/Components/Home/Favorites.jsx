import React from "react";
import { ImTelegram } from "react-icons/im";

import { FiPlus } from "react-icons/fi";

const FavoriteData = [
    {
        id: "1",
        image: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        name: "User1"
    },
    {
        id: "2",
        image: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        name: "User1"
    },
    {
        id: "3",
        image: "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        name: "User1"
    },
];

const Favorites = () => {
    return (
        <div className="mt-12">
            <div className="flex border-s-4 border-orange-400">
                <h2 className="font-bold ms-2 text-white font-notoTH">รายการโปรด</h2>
            </div>
            {/* Carousel */}
            <div className="carousel rounded-box mt-4 gap-x-4 flex justify-start">
                {FavoriteData.map((items) => (
                    <div key={items.id} className="carousel-item flex-col text-wrap">
                        <img src={items.image} alt="Burger"
                            className="h-14 w-14 rounded-full" />
                        <h1 className="text-white text-sm mt-2 text-wrap font-notoTH">{items.name}</h1>
                    </div>
                ))}
                <div className="carousel-item flex-col">
                    <div alt="Burger">
                        <button className="h-14 w-14 border-dashed border-2 border-slate-400 rounded-full flex justify-center items-center">
                            <FiPlus className="text-slate-400 text-3xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites;