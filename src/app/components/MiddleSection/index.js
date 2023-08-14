'use client'
import React, { useEffect, useState } from "react";
import Stories from "../Stories";
import PostSection from "../PostSection";
import { USERS } from "../Stories/dataJson";

const MiddleSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = USERS(15);
    setData(loadData);
  }, []);

  return (
    <main className="flex flex-col justify-between items-center space-y-10">
      <section className="flex justify-center relative bg-black pt-10 w-[50%] h-[auto]">
        <Stories />
      </section>
      <section className="w-[630px] h-auto">
        {data.map((item, i) => (
          <PostSection key={item.userId} Username={item.username} Emoji={item.emoji} Link={item.avatar} />
        ))}
      </section>
    </main>
  );
};

export default MiddleSection;
