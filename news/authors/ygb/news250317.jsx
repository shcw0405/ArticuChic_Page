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
  const title = "Use cas and some of UI";
  const date = "2025-03-17";
  const author = "杨功渤";

  const downloads = [
    {
      name: "example.pdf",
      url: new URL("../../../ArticuChic/assets/FRE.pdf", import.meta.url).href,
      description: "description",
    },
  ];

  const content = [
    {
      type: "text",
      value:
        "First, I constructed the possible architecture of the entire system.",
    },
    {
      type: "image",
      url: new URL(
        "../../../ArticuChic/assets/yang/可能的框架.png",
        import.meta.url
      ).href,
      alt: "Image 1",
      caption: "Caption for Image 1",
    },

    {
      type: "text",
      value: "Here is the use case split from the above architecture.",
    },
    {
      type: "image",
      url: new URL("../../../ArticuChic/assets/yang/用例1.png", import.meta.url)
        .href,
      alt: "Image 2",
      caption: "Caption for Image 2",
    },

    {
      type: "text",
      value:
        "Here is the publishing UI I made, and the rest is done by the team leader.",
    },
    {
      type: "image",
      url: new URL("../../../ArticuChic/assets/yang/UI1.png", import.meta.url)
        .href,
      alt: "Image 3",
      caption: "Caption for Image 3",
    },
    {
      type: "image",
      url: new URL("../../../ArticuChic/assets/yang/UI2.png", import.meta.url)
        .href,
      alt: "Image 4",
      caption: "Caption for Image 4",
    },
    {
      type: "image",
      url: new URL("../../../ArticuChic/assets/yang/UI3.png", import.meta.url)
        .href,
      alt: "Image 5",
      caption: "Caption for Image 5",
    },
    {
      type: "image",
      url: new URL("../../../ArticuChic/assets/yang/UI4.png", import.meta.url)
        .href,
      alt: "Image 6",
      caption: "Caption for Image 6",
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
        {/* 动态渲染文本和图片 */}
        {content.map((item, index) => {
          if (item.type === "text") {
            return <p key={index}>{item.value}</p>;
          } else if (item.type === "image") {
            return (
              <div key={index} className="news-image">
                <img src={item.url} alt={item.alt} />
                {item.caption && (
                  <p className="image-caption">{item.caption}</p>
                )}
              </div>
            );
          }
          return null;
        })}

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
