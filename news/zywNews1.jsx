import React from "react";

/**
 * 新闻模板文件
 * 使用说明：
 * 1. 复制此文件并重命名为新的新闻文件名（例如：News20240315.jsx）
 * 2. 修改以下内容：
 *    - title: 新闻标题
 *    - date: 发布日期
 *    - author: 作者
 *    - content: 新闻内容
 *    - images: 图片数组（可选）
 *    - downloads: 下载文件数组（可选）
 * 3. 图片请放在 src/assets/news/ 目录下
 * 4. 下载文件请放在 public/downloads/ 目录下
 */

const NewsTemplate = () => {
  const title = "yuanyi week2 work introduction";
  const date = "2024-03-17";
  const author = "Yuanwu ZHu";

  const downloads = [
    {
      name: "Division of responsibilities.docx",
      url: new URL("../ArticuChic/assets/zyw/Division of responsibilities.docx", import.meta.url).href,
      description: "Content as described in the name ",
    },
  ];

  return (
    <div className="news-container">
      <h1>{title}</h1>
      <div className="news-meta">
        <span>Publication Date: {date}</span>
        <span>Author: {author}</span>
      </div>

      <div className="news-content">
        {/* Write News here */}
        <p>Content of News...</p>

        <div className="news-image">
          <img
            src={new URL("../ArticuChic/assets/test.jpg", import.meta.url).href}
            alt="Project Launch"
          />
          <p className="image-caption">
            If you need to include images, please upload the image files to the
            ArticuChic/assets directory and insert them into the content
            following the specified format.
          </p>
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
