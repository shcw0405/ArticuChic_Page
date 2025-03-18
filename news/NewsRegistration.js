/*
 * 新闻注册中心
 *
 * 非技术人员请注意：
 * 1. 每次创建新的新闻JSX文件后，请在对应作者文件夹的index.js中注册
 * 2. 无需修改本文件，只需更新authors文件夹中的内容
 * 3. 日期格式建议使用: "YYYY-MM-DD"（如 2024-03-15）格式，以确保排序正确
 * 4. 新闻会按日期自动倒序排列，最新日期的新闻会显示在前面，所以添加新闻时无需考虑顺序问题
 */

// 导入所有作者的新闻
import * as authors from "./authors";

// 合并所有作者的新闻到一个对象
const mergeAllNews = () => {
  let allNews = {};

  // 遍历所有作者的新闻
  Object.values(authors).forEach((authorNews) => {
    // 合并到总新闻对象
    allNews = { ...allNews, ...authorNews };
  });

  return allNews;
};

// 注册所有新闻组件
// 注意：新闻会自动按日期倒序排列，最新的显示在前面，所以添加新闻时无需考虑顺序
const newsRegistry = mergeAllNews();

export default newsRegistry;
