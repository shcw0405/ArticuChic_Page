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
  const title = "BoRui's work in week3 ";
  const date = "2024-03-23";
  const author = "Wu BoRui";

  const downloads = [
    {
      name: "CN_MedicalStaff.xlsx",
      url: new URL("../../../ArticuChic/public/wbr/CN_MedicalStaff.xlsx", import.meta.url).href,
      description: "Chinese edition of request analysis for medical stuffs",
    },
     {
      name: "CN_Patient.xlsx",
      url: new URL("../../../ArticuChic/public/wbr/CN_Patient.xlsx", import.meta.url).href,
      description: "Chinese edition of request analysis for patients",
    },
    {
      name: "EN_MedicalStaff.xlsx",
      url: new URL("../../../ArticuChic/public/wbr/EN_MedicalStaff.xlsx", import.meta.url).href,
      description: "English edition of request analysis for medical stuffs",
    },
     {
      name: "EN_Patient.xlsx",
      url: new URL("../../../ArticuChic/public/wbr/EN_Patient.xlsx", import.meta.url).href,
      description: "English edition of request analysis for patients",
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
       <p>updated request analysis,providing Chinese and English editions for medical stuffs and patients, respectively</p>


 

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
