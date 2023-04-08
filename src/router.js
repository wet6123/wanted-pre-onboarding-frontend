import { createBrowserRouter } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import TodoPage from "./pages/TodoPage";
import AuthCheck from "./layout/AuthCheck";
import LoginCheck from "./layout/LoginCheck";

const routerData = [
  {
    id: 0,
    path: "/signin",
    lable: "SigninPage",
    element: <SigninPage />,
    withAuth: false,
    autoLogin: true,
  },
  {
    id: 1,
    path: "/signup",
    lable: "SignupPage",
    element: <SignupPage />,
    withAuth: false,
    autoLogin: true,
  },
  {
    id: 2,
    path: "/todo",
    lable: "TodoPage",
    element: <TodoPage />,
    withAuth: true,
    autoLogin: false,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthCheck>{router.element}</AuthCheck>,
      };
    } else if (router.autoLogin) {
      return {
        path: router.path,
        element: <LoginCheck>{router.element}</LoginCheck>,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
      };
    }
  })
);
