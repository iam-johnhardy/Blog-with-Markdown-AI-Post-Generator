import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { BLOG_NAVBAR_DATA } from "../../../utils/data"

import logo from '../../../assets/blog-logo.jpg'

const BlogNavbar = ({activeMenu}) => {
    const {openSideMenu, setOpenSiderMenu} = useState (false)
        const {openSearchBar, setOpenSearchBar} = useState (false)

  return (
    <>
    <div className="bg-white border border-b border-gray-200/50 backdrop:blur-12xl py-4 px-7 sticky top-0 p-2.5">
      <div className="container mx-autonflex item-center justify-between gap-5">
        <div className="flex gap-5">
          <button
           className='block lg:hidden text-block -mt-1' 
          onClick={() =>{
            setOpenSiderMenu(openSideMenu);
          }}>
            {openSideMenu ? (<HiOutlineX className="text-2xl" /> ) 
            :(
              <HiOutlineMenu className="text-2xl"/>
            )
            }

          </button>

          <Link to="/"/>
          <h1 className='logo h-[24px] md:h-[26px]'>Time to Program</h1>

          {/* <img src={logo} alt="Logo" className=''/> */}
        </div>

        <nav className='hidden md:flex items-center gap-10'>

        </nav>



      </div>
    </div>

    </>
  )
}

export default BlogNavbar