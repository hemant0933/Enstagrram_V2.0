"use client";
import { useSnackbar } from "@mui/base/useSnackbar";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Image from "next/image";
import Icon from "../Icon";
import InstagramSvg from "../../../../public/Instagram_logo.svg.png";
import mobInsta from "../../../../public/icons8-instagram-100.png";
import { CiHome, CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlineExplore, MdOutlineKeyboardCommandKey } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsClockHistory, BsPlusSquare } from "react-icons/bs";
import {
  IoBookmarkOutline,
  IoReorderThreeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoMoon, GoReport } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/store/authSlice";
import { toast } from "react-hot-toast";

let Menuname = [
  { icon: CiHome, url: "/Feed", name: "Home" },
  { icon: CiSearch, url: "/Search", name: "Search" },
  { icon: MdOutlineExplore, url: "/DefaultPage", name: "Explore" },
  { icon: BiMoviePlay, url: "/DefaultPage", name: "Reels" },
  { icon: AiOutlineMessage, url: "/DefaultPage", name: "Messages" },
  { icon: CiHeart, url: "/DefaultPage", name: "Notification" },
  { icon: BsPlusSquare, url: "/DefaultPage", name: "Create" },
  { icon: IoPersonCircleOutline, url: "/Profile", name: "Profile" },
];

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("User logged out!");
      dispatch(setAuthState(false));
      router.push("/Login");
    } catch (e) {
      console.error(e.message);
      toast.error(e.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-[15%] mx-2 flex flex-col items-center  border-e-[1px]">
      <div className="select-none mt-5 mx-auto relative mb-3  lg:block md:hidden sm:hidden">
        <Image
          src={InstagramSvg}
          className="bg-white p-1 rounded-md hover:animate-bounce cursor-pointer"
          width={180}
          height={160}
          alt="instagram"
        />
      </div>
      <div className="select-none w-10 h-10 mt-5 mx-auto mb-3 relative lg:hidden flex-shrink-0">
        <Image src={mobInsta} width={124} height={124} alt="instagram" />
      </div>
      <div className="w-38 h-auto flex flex-col justify-center space-y-3">
        {Menuname.map((item, index) => (
          <Link href={item.url} key={index}>
            <Icon Icon={item.icon} name={item.name} />
          </Link>
        ))}
      </div>
      <div
        className="w-38 h-auto flex flex-col justify-center mt-16"
        onClick={handleOpen}
      >
        <div
          className="w-[200px] h-[48px] mx-4 p-[10px] sm:hidden md:hidden lg:flex items-center
     justify-start space-x-3 rounded-md 
    hover:bg-gray-800 cursor-pointer transition"
        >
          <IoReorderThreeOutline className="w-[24px] h-[24px]" />
          <span className="text-[16px] lg:visible text-white">More</span>
        </div>
        <div
          className="w-[100px] h-[48px] mx-0 lg:hidden sm:hidden md:flex items-center
     justify-center space-x-0 rounded-md 
    hover:bg-gray-800 hover:animate-bounce cursor-pointer transition"
        >
          <IoReorderThreeOutline className="w-[26px] h-[26px] lg:hidden" />
          <span className="text-[16px] text-white md:hidden">More</span>
        </div>
        <div
          className="w-[50px] h-[48px] mx-0 lg:hidden md:hidden  sm:flex items-center
     justify-center space-x-0 rounded-md 
    hover:bg-gray-800 hover:animate-bounce cursor-pointer transition"
        >
          <IoReorderThreeOutline className="w-[26px] h-[26px] lg:hidden" />
          <span className="text-[16px] text-white sm:hidden md:hidden">
            More
          </span>
        </div>
      </div>
      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <div
            className="w-[250px] h-[405px] px-2 py-3 space-y-1 rounded-md bg-gray-900 absolute left-[8%] top-[29%] flex flex-col"
            {...getRootProps()}
          >
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <IoSettingsOutline className="w-[21px] h-[21px]" />
              Settings
            </div>
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <BsClockHistory className="w-[21px] h-[21px]" />
              Your activity
            </div>
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <IoBookmarkOutline className="w-[21px] h-[21px]" />
              Saved
            </div>
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <MdOutlineKeyboardCommandKey className="w-[21px] h-[21px] border border-white p-[0.8px] rounded-sm" />
              Keyboard shortcuts
            </div>
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <GoMoon className="w-[21px] h-[21px]" />
              Switch appearance
            </div>
            <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex gap-2 px-5 rounded-md items-center text-sm">
              <GoReport className="w-[21px] h-[21px]" />
              Report a problem
            </div>
            <div className="border-t-4 mx-0 border-gray-700">
              <div className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex mt-2 gap-2 px-5 rounded-md items-center text-sm">
                Switch accounts
              </div>
            </div>
            <div className="border-t-[1px] mx-0 border-white">
              <div
                className="w-[230px] h-[48px] hover:bg-slate-600 cursor-pointer flex mt-2 gap-2 px-5 rounded-md items-center text-sm"
                onClick={handleLogout}
              >
                Log out
              </div>
            </div>
          </div>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};

export default SideBar;
