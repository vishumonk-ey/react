import React from "react";
import Button from "../Button";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const isloggedOut = await authService.logout();
      if (isloggedOut) {
        dispatch(logout());
        navigate("/");
      }
    } catch (err) {
      console.log("Logging out error", err);
    }
  };
  return (
    <Button className="hover:bg-green-500 bg-orange-700" onClick={handleLogOut}>
      {" "}
      Logout{" "}
    </Button>
  );
}

export default Logout;
