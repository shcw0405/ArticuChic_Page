import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Members from "./pages/Members";
import Docs from "./pages/Docs";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
      {
        path: "members",
        element: <Members />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
    ],
  },
]);

export default router;
