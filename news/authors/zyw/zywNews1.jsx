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
      url: new URL("../../../ArticuChic/assets/zyw/Division of responsibilities.docx", import.meta.url).href,
      description: "Content as described in the name ",
    },
  ];

  const content = [
    { type: "text", value: "This week, the task I chose was to ask large models, including but not limited to DeepSeek, DouBao, TongyiQianwen, and Kimi, to divide responsibilities. I received multiple division plans and finally summarized and selected the plan provided by DeepSeek." },
     {
     type: "image",
     url: new URL("../../../ArticuChic/assets/zyw/p1.png", import.meta.url).href,

     alt: "",
     caption: "",
     },


   {
     type: "image",
     url: new URL("../../../ArticuChic/assets/zyw/p2.png", import.meta.url)
       .href,
     alt: "",
     caption: "",
   },

   
   {
     type: "image",
     url: new URL("../../../ArticuChic/assets/zyw/p3.png", import.meta.url)
       .href,
     alt: "",
     caption: "",
   },
   {
    type: "text",
    value:
      "follows are summary",
  },
   {
     type: "image",
     url: new URL("../../../ArticuChic/assets/zyw/p4.png", import.meta.url)
       .href,
     alt: "",
     caption: "",
   },
   {
     type: "image",
     url: new URL("../../../ArticuChic/assets/zyw/p5.png", import.meta.url)
       .href,
     alt: "",
     caption: "",
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
        <div className="">
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
