/**
 * 蔡旭的新闻索引
 */
import cxNews1 from "./cxNews1";
import cxNews2 from "./cxNews2";
import cxNews3 from "./cxNews3";

// 蔡旭的所有新闻条目
const cxNews = {
  "cx-news-1": {
    component: cxNews2,
    info: {
      id: "cx-news-1",
      title: "Our Official Website is Now Live!",
      date: "2025-03-13",
      summary:
        "We're thrilled to announce that our official website has gone live. Discover more about ArticuChic and stay connected with our latest updates.",
      image: new URL("../../../ArticuChic/assets/page.png", import.meta.url)
        .href,
      category: "Key Milestones",
      author: "蔡旭",
    },
  },
  "cx-news-2": {
    component: cxNews1,
    info: {
      id: "cx-news-2",
      title: "ArticuChic Project Officially Launched",
      date: "2025-03-05",
      summary:
        "Congratulations! The ArticuChic Team is Officially Formed! We will focus on product development, and we look forward to sharing the exciting outcomes from our team in the near future. Stay tuned!",
      image: new URL("../../../ArticuChic/assets/OIP.jpg", import.meta.url)
        .href,
      category: "Key Milestone",
      author: "蔡旭",
    },
  },
  "cx-news-3": {
    component: cxNews3,
    info: {
      id: "cx-news-3",
      title: "蔡旭's Work from 3.11 to 3.16",
      date: "2025-03-16",
      summary: "这周我做了三个任务",
      image: new URL("../../../ArticuChic/assets/head.jpg", import.meta.url)
        .href,
      category: "Weekly Work",
      author: "蔡旭",
    },
  },
  // 添加更多新闻
};

export default cxNews;
