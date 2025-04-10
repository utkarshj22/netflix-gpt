import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="h-full w-full overflow-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
