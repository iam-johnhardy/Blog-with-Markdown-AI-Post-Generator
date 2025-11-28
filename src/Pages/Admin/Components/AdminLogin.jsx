import React,{useState} from "react";
import DashboardLayout from "../../../components/Layouts/BlogLayout/DashboardLayout";
import Login from "../../../components/Auth/Login";
import SignUp from "../../../components/Auth/SignUp";


const AdminLogin = () =>
     {
        const [currentpage, setCurrentpage] = useState("login");
         return (
               <>
                <div className="bg-white py-5 border-b border-gray-50">
                    <div className="container mx-auto">
                     <h1 className="logo h-[24px] md:h-[26px]">Time to Program</h1>

                    </div>
                </div>
                <div className="min-h-[calc(100vh-67px)] flex items-center justify-center">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
                    {currentpage === "login" ? (
                        <Login setCurrentpage={setCurrentpage} />
                    ) : (
                        <SignUp setCurrentpage={setCurrentpage} />

                    )}
                    </div>
                </div>
               </>

         )
        
     }
export default AdminLogin;