"use client";
import "./dataJson";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { USERS } from "./dataJson";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

const Stories = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleScrollRight = () => {
    setFlag(true);
    const container = document.querySelector(".scroll-container");
    container.scrollLeft += 550;
  };
  const handleScrollLeft = () => {
    setFlag(false);
    const container = document.querySelector(".scroll-container");
    container.scrollLeft -= 550;
  };

  useEffect(() => {
    const loadData = USERS(15);
    setData(loadData);
  }, []);

  return (
    <div className="relative flex justify-center">
      <div className="scroll-container w-[630px] h-[101px] flex flex-nowrap justify-start items-center 
       space-x-4 no-scrollbar overflow-x-auto hover:group">
        {data &&
          data.map((item, index) => (
            <div
              className="relative flex space-y-1 flex-col cursor-pointer justify-center items-center"
              key={item.userId}
            >
              <div className="outer-circle w-16 h-16 flex justify-center items-center rounded-full p-[1.5px]">
                <Image
                  src={item.avatar}
                  className="object-cover"
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-xs text-center">{item.username}</p>
            </div>
          ))}
      </div>
      {!flag ? (
          <div
            className="group-hover:block absolute -right-7 top-6 border bg-gray-50 rounded-full 
             cursor-pointer hover:bg-slate-600 p-1"
            onClick={handleScrollRight}
          >
            <HiOutlineArrowRight className="w-5 h-5 text-gray-500" />
          </div>
        ) : (
          <div 
            className="group-hover:block absolute -left-7 top-6 border bg-gray-50 rounded-full 
             cursor-pointer hover:bg-slate-600  p-1"
            onClick={handleScrollLeft}
          >
            <HiOutlineArrowSmallLeft className="w-5 h-5 text-gray-500" />
          </div>
        )}
    </div>
  );
};

export default Stories;
