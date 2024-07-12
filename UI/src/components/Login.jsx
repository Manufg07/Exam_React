import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const loginSubmit = async (e) => {
  e.preventDefault();
  const loginDetails = {
    username,
    password,
  };

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  console.log(res, "login res from /login");
  if (res.ok) { 
    // console.log('/login resp json', data)
    const data =await res.json();
    const userType = data.userType;
    // console.log('usertype ', userType)
    // toast.success(`Logged in as : ${userType}`);
    return navigate("/home");

  } else {
    toast.error(`Please check your credentials`);
    return navigate("/");
  }

}
  return (
    <>
     {/* <!-- Login Form --> */}
     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={loginSubmit}>
        {/* <!-- <form action="/"> --> */}
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                value={username}
                onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
            <Link to="#" className="text-purple-700 hover:underline">
              Forgot Password?
            </Link>
        </form>
        <p className="mt-6 text-center text-gray-600">Don't have an account?
         <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login