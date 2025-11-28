import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const input = ({value, Onchange, label, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
   <div className="">
     <label className='text-[13px] text-slate-800 '>{label}</label>

     <div className='input-box'>
        <input 
        type={
            type == 'password' ? (showPassword ? 'text' : 'password') :type
        } 
        placeholder={placeholder}
        className='w-full bg-transparent outline-none p-2 text-sm'
        value={value}
        onChange={(e) => onchange(e)}
        />
        (type === 'password' && (
            <span onClick={togglePasswordVisibility} className=''>
                {showPassword ? <FaRegEyeSlash size={22} className='text-primary cursor-pointer' /> : <FaRegEye size={22} className='text-slate-400 cursor-pointer'/>}
            </span>
        ))

    </div>
   </div>
  )
}
