import WuBoRui_report_week2 from "./WuBoRui_report_week2";

// 管理员的所有新闻条目
const adminNews = {
  "WuBoRui_report_week2": {
    component: WuBoRui_report_week2,
    info: {
      id: "WuBoRui_report_week2",
      title: "BoRui’s work from 3.11 to 3.16",
      date: "2025-03-17",
      summary: "I complished the request analysis in this week",
      image: new URL("../../../ArticuChic/assets/vio.jpg", import.meta.url)
        .href,
      category: "Weekly Work",
      author: "BoRui",
    },
  },
  // 添加更多新闻
};

export default adminNews;