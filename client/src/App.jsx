import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLogin from "./admin/AdminLogin";
import AdminPanel from "./admin/AdminPanel";
import { Toaster } from "react-hot-toast";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <LandingPage />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin/panel",
      element: <AdminPanel />,
    },
  ]);

  return (
    <div>
      <Toaster/>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
