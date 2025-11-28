import React,{ UseContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { Input } from "../Inputs/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  // const { updateUser, setOpenAuthForm } = UseContext(UserContext);
  const navigate = useNavigate();

  // Handle login Form submit
  const handleLogin = async (e) => {
    e.preventDefault();

  };

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!password) {
    setError("Please enter your password.");
    return;
  }

  setError(null);

  //
  return (
    <div className="flex items-center">
      <div className="w-[90vw] md-w[33vw] p-7 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black ">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[2px] mb-6">Please enter your details to log in</p>

        <form onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <Input
          value = {value}
          />

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className="text-[13px] text-slate-800 mt-3">Don't have an account? {""}
            <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() =>
            {
              setCurrentPage("signup");
            }
            }>
              SignUp

            </button>
          </p>
        </form>
      </div>

      <div className="hidden md:block">
        <img src='/assets/images/img.jpg'  alt="" className="h-[400px]"/>
      </div>



    </div>
  );
}
export default Login