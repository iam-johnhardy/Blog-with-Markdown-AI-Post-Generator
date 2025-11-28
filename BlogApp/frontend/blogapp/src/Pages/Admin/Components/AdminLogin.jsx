import React from "react";
import DashboardLayout from "../../../components/Layouts/BlogLayout/DashboardLayout";


const AdminLogin = () =>
     {
         return (
               <DashboardLayout>
                <div className="bg-white py-5 border-b border-gray-50">
                    <div className="container mx-auto">
                        <img src={Logo} alt="" />
                    </div>
                </div>
               </DashboardLayout>

         )
        
     }
export default AdminLogin;