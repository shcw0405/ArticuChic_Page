import React from "react";
import { Link } from "react-router-dom";

/**
 * 新闻模板文件
 * 使用说明：
 * 1. 复制此文件并重命名为新的新闻文件名（例如：News20240315.jsx）
 * 2. 修改以下内容：
 *    - title: 新闻标题
 *    - date: 发布日期
 *    - author: 作者
 *    - content: 新闻内容
 *    - images: 图片（可选）
 *    - downloads: 下载文件数组（可选）
 * 3. 图片和下载文件请放在 ArticuChic/assets/ 目录下
 */

const NewsTemplate = () => {
  const title = "ArticuChic Project Officially Launched";
  const date = "2024-03-05";
  const author = "蔡旭";

  const downloads = [];

  return (
    <div className="news-container">
      <h1>{title}</h1>
      <div className="news-meta">
        <span>Publication Date: {date}</span>
        <span>Author: {author}</span>
      </div>

      <div className="news-content">
        {/* Write News here */}
        <p>
          Congratulations! The ArticuChic Team is Officially Formed! We will
          focus on product development, and we look forward to sharing the
          exciting outcomes from our team in the near future. Stay tuned!
        </p>

        <div className="news-image">
          <img
            src={new URL("../ArticuChic/assets/OIP.jpg", import.meta.url).href}
            alt="Project Launch"
          />
          <p className="image-caption"></p>
        </div>

        {/* File List for Download */}
        {downloads.length > 0 && (
          <div className="downloads-section">
            <h3>Related Files Download</h3>
            <ul>
              {downloads.map((file, index) => (
                <li key={index}>
                  <a href={file.url} download>
                    {file.name}
                  </a>
                  <p>{file.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsTemplate;
