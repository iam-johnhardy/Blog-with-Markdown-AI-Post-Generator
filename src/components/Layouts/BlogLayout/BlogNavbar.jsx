import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { BLOG_NAVBAR_DATA } from '../../../utils/data';
import SideMenu from './SideMenu';


const BlogNavbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openAuthForm, setOpenAuthForm] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-gray-200/50 backdrop-blur py-4 px-7 sticky top-0">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <div className="flex gap-5 items-center">
            <button
              className="block lg:hidden text-black mt-2"
              onClick={() => setOpenSideMenu(!openSideMenu)}
            >
              {openSideMenu ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
            </button>

            <Link to="/" className="flex items-center gap-2">
              <h1 className="logo h-[24px] md:h-[26px]">Time to Program</h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-10 p-2">
            {BLOG_NAVBAR_DATA.map((item, index) => {
              if (item?.onlySideMenu) return null;

              return (
                <Link key={item.id ?? index} to={item.Path}>
                  <li
                    className="text-[15px] text-black font-medium list-none relative group cursor-pointer"
                    aria-current={activeMenu === item.Label ? 'page' : undefined}
                  >
                    {item.Label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-[2px] bg-sky-500 transition-transform duration-300 origin-left
                        ${index === 0 || activeMenu === item.Label ? 'scale-x-100' : 'scale-x-0'}
                      `}
                    />
                  </li>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <button
              className="text-black cursor-pointer"
              onClick={() => setOpenSearchBar(true)}
              aria-label="Open search"
            >
              <LuSearch className="text-[22px]" />
            </button>

            <button
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-xs md:text-sm font-semibold text-white px-5 md:px-7 py-2 rounded-full hover:bg-black transition-colors cursor-pointer"
              onClick={() => setOpenAuthForm(true)}
            >
              Login/SignUp
            </button>
          </div>
        </div>

        {openSideMenu && (
          <div className="fixed top-[61px] left-0 z-50 bg-white shadow-md">
            <SideMenu activeMenu={activeMenu} isBlogMenu />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogNavbar;