import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

 const Input = ({ value, onChange, label, placeholder, type}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
            <div className='relative'>
                <input
                    type={
                        type === "password" ? (showPassword ? "text" : "password") : type
                    }
                    placeholder={placeholder}
                    className='w-full px-3 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary'
                    value={value}
                    onChange={(e) => onChange(e)}
                />
                {type === "password" && (
                    <span
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaRegEye
                                className='text-primary cursor-pointer'
                            />
                        ) : (
                            <FaRegEyeSlash
                                className='text-slate-400 cursor-pointer'
                            />
                        )}
                    </span>
                )}
            </div>
        </div>
    )
}
export default Input;