import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
// import { createBrowserRouter, data } from "react-router-dom";
import appwriteService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import {LoadingPage} from "./components/index";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService
      .getCurrentuser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) =>
        console.log("error in getting user or no session exists yet", err)
      )
      .finally(() => setLoading(false));
  }, []);
  // userData isliye le rhe hain because whenever i will refresh my page then my page will start from scratch and store data will be reinitialized as it is stored in memory , app will run again and will fetch the userData and store it in the store , which can be further used by my pages.
  if (loading) {
    return <LoadingPage />;
  } else {
    return(<div className="min-h-screen flex flex-wrap content-between ">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>)
  }
}

export default App;
