import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Protected({ children, authentication = true }) {
  // TODO: understand again....
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navigate("/login");
    } else if (!authentication && authentication !== authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, authentication, navigate]);
  return loading ? (
    
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">.</div>
    </div>
  ) : (
    <>{children}</>
  );
}

export default Protected;
