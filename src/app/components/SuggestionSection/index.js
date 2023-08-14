"use client";
import React, { useEffect, useState } from "react";
import { USERS } from "../Stories/dataJson";
import Image from "next/image";
import Link from "next/link";

const SuggestionSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = USERS(5);
    setData(loadData);
  }, []);
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="w-[315px] h-[47px] px-5 h[auto] flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <div className="outer-circle w-14 h-14"></div>
          <div className="w-auto h-auto flex flex-col">
            <span className="text-sm font-semibold">Hemant00000</span>
            <span className="text-xs text-gray-400">Hemantkumar</span>
          </div>
        </div>
        <div className="text-sm text-blue-500 cursor-pointer">Switch</div>
      </div>
      <div className="w-[315px] h-[47px] py-4 px-5 h[auto] flex justify-between">
        <span className="text-sm text-gray-400 font-semibold">
          Suggested for you
        </span>
        <span className="text-xs">See all</span>
      </div>
      <div className="w-[315px] px-2 h[auto] flex flex-col space-y-1 justify-between ">
       {
        data && data.map((item,i) => (
          <div className="flex h-[60px] px-2 justify-between items-center hover:bg-slate-800 hover:rounded-md" key={item.userId}>
          <div className="flex space-x-2 items-center">
            <div className="w-12 h-12">
              <Image src={item.avatar} className="rounded-full" alt="profilepic" width={100} height={100} />
            </div>
            <div className="w-auto h-auto flex flex-col">
              <span className="text-xs font-semibold">{item.username}</span>
              <span className="text-xs text-gray-400">{item.fullname}</span>
            </div>
          </div>
          <span className="text-sm text-blue-500 cursor-pointer">Follow</span>
        </div>
        ))
       }
      </div>
      <div className="w-[287px] px-2 h[auto] flex flex-col space-y-2 justify-between">
       <div className="flex text-[12px] space-x-4">
          <span className="text-gray-400 hover:underline"><Link href={'/'}>About</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>Help</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>Press</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>API</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>Jobs</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>Privacy</Link></span>
          <span className="text-gray-400 hover:underline"><Link href={'/'}>Terms</Link></span>
       </div>
       <div className="flex text-[12px] space-x-4">
        <span className="text-gray-400 hover:underline"><Link href={'/'}>Location</Link></span>
        <span className="text-gray-400 hover:underline"><Link href={'/'}>Language</Link></span>
        <span className="text-gray-400 hover:underline"><Link href={'/'}>Meta Verified</Link></span>
       </div>
       <div className="mt-5 text-left text-xs text-gray-400">
       © 2023 INSTAGRAM FROM META
       </div>
      </div>
    </div>
  );
};

export default SuggestionSection;
