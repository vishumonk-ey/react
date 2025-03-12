import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../src/pages/Home.jsx";
import { Login } from "../src/pages/Login.jsx";
import { Signup} from '../src/pages/Signup.jsx'
import { Protected as AuthLayout } from "../src/components/AuthLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // why loading app
    children: [
      {
        path: "/",
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
        path:'/signup',
        element : (
          <AuthLayout authentication={false}>
              <Signup/>
          </AuthLayout>
        )
      } ,
      {
        path
      }
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
