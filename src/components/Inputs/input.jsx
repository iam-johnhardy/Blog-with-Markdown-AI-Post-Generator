import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const input = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <input
                text={
                    type == "password" ? (showPassword ? "text" : "password") : type
                }
                placeholder={placeholder}
                className='w-full bg-transparent outline-none'
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
    )
}
