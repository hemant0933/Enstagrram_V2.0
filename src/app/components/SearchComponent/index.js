"use client";
import React, { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { USERS } from "../../components/Stories/dataJson";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
// import SideBar from '../components/SideBar';

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (e) => {
    let newuser = user.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(newuser);
  };

  useEffect(() => {
    const loadData = USERS(100);
    console.log(loadData);
    setUser(loadData);
  }, []);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setUser(users);
    }
  }, []);
  return (
    <>
      <IoLogoInstagram className="text-white text-[100px] " />
      <div className="w-[590px] h-[50px] flex items-center outline-none rounded-md border-none bg-slate-700 text-white p-2">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full h-full outline-none rounded-md border-none bg-slate-700 text-white p-2"
        />
        <BiSearch
          className="text-white cursor-pointer text-[39px] rounded-md hover:bg-slate-800 p-2"
          onClick={handleSearch}
        />
      </div>
      <div className="w-[900px] h-[auto] flex flex-wrap gap-3 justify-center items-center ml-auto mr-auto">
        {!search
          ? user &&
            user.map((item) => (
              <div className="p-2 bg-gray-900" key={item.userId}>
                <Image
                  src={item.avatar}
                  width={200}
                  height={200}
                  alt={item.username}
                />
                <h2 className="text-center">{item.username}</h2>
              </div>
            ))
          : filteredUsers.map((item) => (
              <div className="p-2 bg-gray-900" key={item.userId}>
                <Image
                  src={item.avatar}
                  width={200}
                  height={200}
                  alt={item.username}
                />
                <h2 className="text-center">{item.username}</h2>
              </div>
            ))}
      </div>
    </>
  );
};

export default SearchComponent;
