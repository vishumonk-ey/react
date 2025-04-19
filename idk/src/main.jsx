import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import Profile from "./pages/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-posts",
        element: (
          <AuthLayout authRequired={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authRequired={true}>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authRequired={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authRequired={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/posts/:slug",
        element: (
          <AuthLayout authRequired={true}>
            <Post />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authRequired={true}>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authRequired={true}>
            <Profile />
          </AuthLayout>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
