import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GameDetails from "../pages/GameDetails";
import ForgotPassword from "../pages/ForgotPassword";

import UpdateProfile from "../pages/UpdateProfile";
import NotFound from "../pages/NotFound";
import ExtraPage from "../pages/ExtraPage";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "game/:id", element:
          
            <GameDetails />
          
      },
      { path: "profile", 
        element: <MyProfile></MyProfile>
          
      },
      { path: "profile/update", element:
          
            <UpdateProfile />
          
      },
      { path: "submit", element: <ExtraPage></ExtraPage> }, 
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot", element: <ForgotPassword /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
