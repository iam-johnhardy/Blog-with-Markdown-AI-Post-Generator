import React from 'react';
import { BLOG_NAVBAR_DATA, SIDE_MENU_DATA } from '../../../utils/data';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
// import { CharAvatar } from '../Cards/ChartAvatar';

const SideMenu = ({ activeMenu, isBlogMenu }) => {
  const user = {name:'John'};
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const items = isBlogMenu ? BLOG_NAVBAR_DATA : SIDE_MENU_DATA;

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-6 sticky top-[61px] z20 ">
      {user && (
        <div className="flex flex-colitem-center justify-center gap-1 mt-3 mb-2">
          {user?.profileImageUrl ? (
            <img 
            src={user.profileImageUrl} 
            alt='Profile Image'
            className='w-20 bh-20 bg-slate-400 rounded-full'/>
          ) : (
            <CharAvatar
            fullName={user?.name || ""}
            width="w-30"
            height="h-20"
            style="text-xl"/>
          )}
          <div>
            <h5 className="text-gray-950 font-semibold text-center leading-6 mt-3">
              {user?.name || ''}</h5>
            <p className='text-[13px] font-medium text-gray-400 text-center'>{user?.email || ''}</p>
          </div>
        </div>
      )}

      {items.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px]
            ${activeMenu === item.Label ? 'text-white bg-linear-to-r from-sky-500 to-cyan-400' : ''}
            py-3 px-6 rounded-lg mb-3 cursor-pointer`}
          onClick={() => handleClick(item.Path)}
        >
          {item.icon && <item.icon className="text-lg" />}
          {item.Label}
        </button>
      ))}

      {user && (
        <button
          className="w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 cursor-pointer"
          onClick={() => handleLogout()}
        >
          <LuLogOut className="" />
          Logout
        </button>
      )}
    </div>
  );
};

export default SideMenu;