import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlay,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function TheHeader() {
    const [toggle, setToggle] = useState(false);
    const menu = [
      {
        name: "HOME",
        icon: HiHome,
      },
      {
        name: "SEARCH",
        icon: HiMagnifyingGlass,
      },
      {
        name: "WATCH LIST",
        icon: HiPlus,
      },
      {
        name: "ORIGINALS",
        icon: HiStar,
      },
      {
        name: "MOVIES",
        icon: HiPlayCircle,
      },
      {
        name: "SERIES",
        icon: HiTv,
      },
    ];
    return (
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-8">
          <img src={logo} className="w-[80px] md:w-[115px] object-cover" alt="" />
  
          <div className="hidden md:flex gap-8">
            {menu.map((item) => (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-5">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItem key={item.name} name={""} Icon={item.icon} />
            )}
          </div>
          <div className="md:hidden">
            <span onClick={()=> setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            </span>
            {toggle ? <div className="absolute mt-3 bg-[#121212] px-5 py-4 border-[1px] border-gray-700">
            {menu.map(
              (item, index) =>
                index > 2 && <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            )}
            </div> : null}
          </div>
        </div>
  
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src="https://images.unsplash.com/photo-1705179910388-0dfc2c21a3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8.jpeg"
          alt=""
        />
      </div>
    );
}

export default TheHeader