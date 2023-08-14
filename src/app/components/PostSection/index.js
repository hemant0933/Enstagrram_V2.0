"use client"
import React, { useState } from 'react';
import './style.css';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import {SlPaperPlane} from 'react-icons/sl';
import { BiHeart } from 'react-icons/bi';


const PostSection = ({Link,Username,Emoji}) => {
  const [heart,setHeart] = useState(false);
  const [bookmark,setBookmark] = useState(false);

  const handleChangeHeartIcon = () => {
    !heart ? 
    setHeart(true) : setHeart(false)
  }
  const handleChangeBookmarkIcon = () => {
    !bookmark ? 
    setBookmark(true) : setBookmark(false)
  }
  return (
    <div className='flex items-center justify-center mt-5 flex-col px-0 py-2 space-y-3 '>
      {/* header part of post */}
      <div className='flex items-center justify-center '>
        <div className='post-card-header  flex items-center justify-between '>
          <div className='flex items-center gap-2'>
            <div className='flex justify-center items-center  w-10 h-10 rounded-full cursor-pointer'>
              <Image src={Link} className="object-cover rounded-full" width={100} height={100} alt='profile image'/>
            </div>
            <div style={{fontSize:'14px'}} className='text-sm font-semibold cursor-pointer'>
              {Username}
            </div>
          </div>
          <div className='threedotIcon'>
            <BsThreeDots className='cursor-pointer'/>
          </div>
        </div>
      </div>
      {/* Post */}
      <div className='imagecontainer border border-gray-900 p-9'>
          <Image src={Link} width={100} height={100} className='cursor-pointer' onDoubleClick={handleChangeHeartIcon} alt='PostCard Image'/>
      </div>
        {/* Like, share, comment Buttton Section */}
      <div className='iconDiv flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='p-0'>
            {
              heart ?  
               <AiOutlineHeart onClick={handleChangeHeartIcon} className='text-red-600 hover:animate-pulse' style={{cursor:'pointer', fontSize:'26px'}}/>
                :
               <AiFillHeart onClick={handleChangeHeartIcon} className='text-red-600 hover:animate-pulse' style={{cursor:'pointer', fontSize:'26px'}}/>
            }
            </div>
            <div className='p-1'><FaRegComment style={{cursor:'pointer', fontSize:'23px'}}/></div>
            <div className='p-0'><SlPaperPlane style={{cursor:'pointer', fontSize:'21px'}}/></div>
          </div>
          <div className='p-0'>
            {
              bookmark ?

              <BsBookmark  onClick={handleChangeBookmarkIcon} style={{cursor:'pointer', fontSize:'21px'}}/> 
              :
              <BsBookmarkFill onClick={handleChangeBookmarkIcon} style={{cursor:'pointer', fontSize:'21px'}}/>
            }
          </div>
      </div>
      {/* like countings */}
      <div className='text-left liked'>
        Liked by <span className='text-sm font-semibold'>immy_174</span> and <span className='text-sm font-semibold'>others</span>
      </div>
    {/* captions */}
      <div className='caption'>
      <span className='font-semibold'>{Username}</span> 👍♥️ Like Share & Comment {Emoji} <br/>
      <BsThreeDots />
      <span style={{fontSize:'14px',cursor:'pointer',color:'#a8a8a8'}}>more</span>
      </div>
    {/* View all links */}
      <div className='ViewComments caption'>
       <span  style={{fontSize:'14px',cursor:'pointer',color:'#a8a8a8'}}>View all 11 comments</span> 
      </div>
    {/* One comment */}
      <div className='oneComment'>
        <div style={{fontSize:'14px'}}><span className='font-semibold'>jenny_12</span> This is a great design </div>
        <div style={{cursor:'pointer', fontSize:'14px'}}><BiHeart/></div>
      </div>
    {/* add btn for comment */}
      <div className='addCommentDiv'>
        <textarea placeholder='Add a comment...' rows={1} className='addComment cursor-pointer'/>
        <BsEmojiSmile style={{cursor:'pointer', fontSize:'14px'}}/>
      </div>  
    </div>
  );
}

export default PostSection;