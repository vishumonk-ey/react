import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import  Home  from "../src/pages/Home.jsx";
import  Login  from "../src/pages/Login.jsx";
import  Signup  from "../src/pages/Signup.jsx";
import  AllPosts  from "../src/pages/AllPosts.jsx";
import  AddPost  from "../src/pages/AddPost.jsx";
import  EditPost  from "../src/pages/EditPost.jsx";
import  Post  from "../src/pages/Post.jsx";
import  AuthLayout  from "../src/components/AuthLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // why loading app -> because acting as main layout , overall container , isme hi hamara Outlet vagerah hoyyega 
    children: [
      {
        path: "/", // why path of this and intital path is same ? because when only root url is opened app will render lekin app ke andar outlet me kya render krna hai vo bata rha 
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-posts",
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout>
            <Post />
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
      {/* what does router provider do ? */}
      {/* basically tells the react to render the components according to the routes present */}
    </Provider>
  </StrictMode>
);
