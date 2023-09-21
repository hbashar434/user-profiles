import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import UserData from "../pages/UserData/UserData";
import UserDetails from "../pages/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <UserData />,
      },
      {
        path: "userDetails/:id",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(
            `https://college-connect-server-chi.vercel.app/manageUser/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
