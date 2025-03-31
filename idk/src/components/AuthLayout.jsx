import React, {useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {isRouteErrorResponse, useNavigate} from "react-router-dom"
function AuthLayout({ authRequired, children }) {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate()
  useEffect(() => {
    if(authRequired && isAuthenticated !== authRequired){
        navigate("/login")
    }else if (!authRequired && isAuthenticated !== authRequired){
        navigate("/")
    }
    setLoading(false)
  }, [navigate,isAuthenticated]);
  return loading ? (
    // loading hai ya nahiii?
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  ): children;
}

export default AuthLayout;
