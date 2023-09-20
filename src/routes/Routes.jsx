import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import UserData from "../pages/UserData/UserData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <UserData />,
      },
    ],
  },
]);

export default router;
