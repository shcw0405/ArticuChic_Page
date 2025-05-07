import cxNews1 from "./cxNews1";
import cxNews2 from "./cxNews2";
import cxNews3 from "./cxNews3";
import cxNews4 from "./cxNewsweek4";
import cxNews5 from "./cxNewsweek5";
import cxNews6 from "./cxNewsweek6";
import cxNews7 from "./cxNewsweek7";
import cxNews8 from "./cxNewsweek8";
import cxNews9 from "./cxNewsweek9";

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
  "cx-news-4": {
    component: cxNews4,
    info: {
      id: "cx-news-4",
      title: "ArticuChic's Work from 3.20 to 3.26",
      date: "2025-03-26",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  "cx-news-5": {
    component: cxNews5,
    info: {
      id: "cx-news-5",
      title: "ArticuChic's Work from 3.27 to 4.2",
      date: "2025-04-02",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  "cx-news-6": {
    component: cxNews6,
    info: {
      id: "cx-news-6",
      title: "ArticuChic's Work from 4.3 to 4.7",
      date: "2025-04-07",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  "cx-news-7": {
    component: cxNews7,
    info: {
      id: "cx-news-7",
      title: "ArticuChic's Work from 4.8 to 4.15",
      date: "2025-04-15",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  "cx-news-8": {
    component: cxNews8,
    info: {
      id: "cx-news-8",
      title: "ArticuChic's Work from 4.24 to 4.30",
      date: "2025-04-30",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  "cx-news-9": {
    component: cxNews9,
    info: {
      id: "cx-news-9",
      title: "ArticuChic's Work from 5.1 to 5.7",
      date: "2025-05-07",
      summary: "This Week's Work from the ArticuChic Team",
      image: new URL(
        "../../../ArticuChic/assets/cx/zhoubao.png",
        import.meta.url
      ).href,
      category: "Weekly Work",
      author: "ArticuChic Team",
    },
  },
  // 添加更多新闻
};

export default cxNews;
