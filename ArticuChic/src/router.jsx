import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Members from "./pages/Members";
import Docs from "./pages/Docs";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
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
          path: "members",
          element: <Members />,
        },
        {
          path: "docs",
          element: <Docs />,
        },
      ],
    },
  ],
  {
    basename: "/ArticuChic_Page",
  }
);

export default router;
