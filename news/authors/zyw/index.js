/**
 * 朱元武的新闻索引
 */
import zywNews1 from "./zywNews1";
// 朱元武的所有新闻条目
const zywNews = {
    "zyw-news-1":{
        component:zywNews1,
        info:{
            id:"zyw-news-1",
            title:"朱元武's work from 3.11 to 3.17",
            date:"2025-03-17",
            summary:"本周进行了职责划分",
            image:new URL("../../../ArticuChic/assets/zhu.jpg", import.meta.url).href,
            category:"Weekly Work",
            author:"朱元武",
        },
    },
};

export default zywNews;
