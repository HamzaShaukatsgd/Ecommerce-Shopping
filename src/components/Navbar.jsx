import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import Register from "../pages/Register"
import {  Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
      const navigate=useNavigate();

  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className=" pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center wrapper mobile:pl-[0px] mobile:pr-0">
        {/* Left Div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden">en</div>
          <div className="searcInput flex items-center border-[2px] border-solid border-lightgray rounded-md ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none mobile:w-[50px] " />
            <Search style={{ fontSize: "16px" }} /> 
          </div>
        </div>
        {/* Logo Div */}
        <div className="logoDiv flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-[0.7rem] mobile:ml-3 small-mobile:text-sm">Summer Kings</div>
        </div>
        {/* Right Div */}
        <div className="right flex flex-1 items-center justify-end mobile:flex-[1.5] ">
        <div className={style} onClick={()=>navigate("/Home")}>Home</div>
          <div className={style} onClick={()=>navigate("/Register")}>Register</div>
          <div className={style}  onClick={()=>navigate("/Login")}>Sign in </div>
          <div className={style} onClick={()=>navigate("/Cart")}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
