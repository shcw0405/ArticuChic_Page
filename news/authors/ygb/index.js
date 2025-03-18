/**
 * 管理员的新闻索引
 */
import news250317 from "./news250317";

// 管理员的所有新闻条目
const adminNews = {
  "news-250317": {
    component: news250317,
    info: {
      id: "news-250317",
      title: "杨功渤’s work from 3.11 to 3.16",
      date: "2025-03-17",
      summary: "这是2025年3月17日发布的新闻",
      image: new URL("../../../ArticuChic/assets/yang.jpg", import.meta.url)
        .href,
      category: "Weekly Work",
      author: "杨功渤",
    },
  },
  // 添加更多新闻
};

export default adminNews;
