/*
 * 新闻注册中心
 *
 * 请注意：
 * 1. 每次创建新的新闻JSX文件后，请在这里导入并注册
 * 2. 注册格式为：
 *    "news-id": {
 *      component: YourNewsComponent,
 *      info: {
 *        id: "news-id",                         // 必须与注册ID一致
 *        title: "新闻标题",                      // 新闻标题
 *        date: "2024-03-15",                    // 发布日期（重要！新闻将按日期倒序展示，最新的显示在前面）
 *        summary: "新闻摘要...",                 // 摘要（在新闻列表中显示）
 *        image: new URL("../assets/your-image.jpg", import.meta.url).href,  // 封面图片 材料请放在assets文件夹中
 *        category: "新闻类别",                   // 新闻类别
 *        author: "作者名称"                      // 作者
 *      }
 *    }
 * 3. 日期格式建议使用: "YYYY-MM-DD"（如 2024-03-15）格式，以确保排序正确
 * 4. 新闻会按日期自动倒序排列，最新日期的新闻会显示在前面，所以添加新闻时无需考虑顺序问题
 */

import cxNews1 from "./cxNews1";
import cxNews2 from "./cxNews2";
import cxNews3 from "./cxNews3";
import NewsTemplate from "./NewsTemplate";

// 注册所有新闻组件
// 注意：新闻会自动按日期倒序排列，最新的显示在前面，所以添加新闻时无需考虑顺序
const newsRegistry = {
  1: {
    component: cxNews2,
    info: {
      id: "1",
      title: "Our Official Website is Now Live!",
      date: "2025-03-13", // 确保使用标准日期格式：YYYY-MM-DD
      summary:
        "We're thrilled to announce that our official website has gone live. Discover more about ArticuChic and stay connected with our latest updates.",
      image: new URL("../ArticuChic/assets/page.png", import.meta.url).href,
      category: "Key Milestones",
      author: "Web Team",
    },
  },

  2: {
    component: cxNews1,
    info: {
      id: "2",
      title: "ArticuChic Project Officially Launched",
      date: "2025-03-05", // 确保使用标准日期格式：YYYY-MM-DD
      summary:
        "Congratulations! The ArticuChic Team is Officially Formed! We will focus on product development, and we look forward to sharing the exciting outcomes from our team in the near future. Stay tuned!",
      image: new URL("../ArticuChic/assets/OIP.jpg", import.meta.url).href,
      category: "Key Milestone",
      author: "Project Management Team",
    },
  },
  3: {
    component: cxNews3,
    info: {
      id: "3",
      title: "蔡旭's Work from 3.11 to 3.16",
      date: "2025-03-16", // 确保使用标准日期格式：YYYY-MM-DD
      summary: "这周我做了三个任务",
      image: new URL("../ArticuChic/assets/head.jpg", import.meta.url).href,
      category: "Weekly Work",
      author: "蔡旭",
    },
  },
  // 在这里注册更多新闻...
  // "your-news-id": { ... }

  // 提示：只需在此处添加新的新闻条目，无需考虑顺序，系统会自动按日期倒序排列
};

export default newsRegistry;
