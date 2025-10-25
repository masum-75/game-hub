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
import MyProfile from "../pages/MyProfile";
import Installation from "../pages/Installation";
import About from "../pages/About";
import PrivateRoute from "../authProvider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "game/:id", 
        element: <PrivateRoute>
          <GameDetails />
        </PrivateRoute>
        },
      { path: "profile",
      element: <PrivateRoute>
        <MyProfile></MyProfile> 
      </PrivateRoute>
    },
      { path: "profile/update", 
        element: <PrivateRoute>
          <UpdateProfile />
        </PrivateRoute> 

      },
      {
        path: "/installation",
        element: (
         
            <PrivateRoute>
              <Installation />
            </PrivateRoute>
         
        ),
      },
      {
        path: "/about",
        element: <About></About>
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/forgot", element: <ForgotPassword /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
