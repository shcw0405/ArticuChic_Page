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
  const title = "蔡旭's Work from 3.11 to 3.16";
  const date = "2024-03-16";
  const author = "蔡旭";

  const downloads = [];

  return (
    <div className="news-container">
      <h1>{title}</h1>
      <div className="news-meta">
        <span>Publication Date: {date}</span>
        <p></p>
        <span>Author: {author}</span>
        <p></p>
      </div>

      <div className="news-content">
        {/* Write News here */}
        <h3>This Week's Accomplishments</h3>
        <li>
          Modified Webpage Code for Team Weekly Reports. Updated the webpage
          code to streamline the process for team members to write their weekly
          reports. The changes can be viewed in the repository:
          https://github.com/shcw0405/ArticuChic_Page .
        </li>
        <div className="news-image">
          <img
            src={
              new URL(
                "../../../ArticuChic/assets/cx/readme.png",
                import.meta.url
              ).href
            }
            alt="Project Launch"
          />
          <p className="image-caption"></p>File Usage Tutorial
        </div>
        <li>
          Completed the Use Case Diagram for Data Processing Module. Designed
          the use case diagram for the data processing module, ensuring clarity
          and alignment with project requirements.
        </li>
        <div className="news-image">
          <img
            src={
              new URL("../../../ArticuChic/assets/cx/dia.png", import.meta.url)
                .href
            }
            alt="Project Launch"
          />
          <p className="image-caption"></p>Diagram
        </div>
        <li>
          Designed the Frontend Interface for the Model Developed the detailed
          frontend page design for the model, focusing on usability and visual
          appeal.
        </li>

        <div className="news-image">
          <img
            src={
              new URL(
                "../../../ArticuChic/assets/cx/login.png",
                import.meta.url
              ).href
            }
            alt="Project Launch"
          />
          <p className="image-caption">Login</p>
        </div>
        <div className="news-image">
          <img
            src={
              new URL("../../../ArticuChic/assets/cx/spe.png", import.meta.url)
                .href
            }
            alt="Project Launch"
          />
          <p className="image-caption">
            Figma:https://www.figma.com/design/DkbgBJfpFEn1hLYlQ9oUBi/medicine2-(Community)?m=auto&t=Oejeeiw7OA4asP4m-6
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
