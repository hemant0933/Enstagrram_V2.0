"use client";

import SearchComponent from "../components/SearchComponent";
import SideBar from "../components/SideBar";

const search = () => {
  return (
    <div>
      <SideBar />
      <div className="w-auto h-auto flex flex-col items-center space-y-2">
        <SearchComponent />
      </div>
    </div>
  );
};

export default search;
