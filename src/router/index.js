import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  HashRouter,
} from "react-router-dom";
import { Board } from "../pages";

const router = createHashRouter([
  {
    path: "/",
    element: <Board />,
    errorElement: <div>Hubo un error</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router} />;

export { CustomRouter };
