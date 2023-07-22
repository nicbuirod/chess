import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
    errorElement: <div>Hubo un error</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router} />;

export { CustomRouter };
