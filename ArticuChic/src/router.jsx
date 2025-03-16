import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Members from "./pages/Members";
import Docs from "./pages/Docs";
import newsRegistry from "../../news/NewsRegistration";

// 动态创建新闻路由
const createNewsRoutes = () => {
  const routes = [];

  // 为每个新闻组件创建路由
  Object.entries(newsRegistry).forEach(([id, item]) => {
    routes.push({
      path: `news/${id}`,
      element: <item.component />,
    });
  });

  return routes;
};

// 生成新闻路由
const newsRoutes = createNewsRoutes();

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
      // 动态添加所有新闻路由
      ...newsRoutes,
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
