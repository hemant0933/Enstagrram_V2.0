"use client";
import React from "react";
import SideBar from "../../app/components/SideBar";
import MiddleSection from "../components/MiddleSection";
import SuggestionSection from "../components/SuggestionSection";

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-1/6 h-full relative">
        <SideBar />
      </div>
      <div className="w-5/6 h-full bg-black flex overflow-x-hidden">
        <div className="w-2/3">
          {/* middle */}
          <MiddleSection />
        </div>
        <div className="w-1/3 mt-16">
          {/* suggestion */}
          <SuggestionSection />
        </div>
      </div>
    </div>
  );
};

export default page;
