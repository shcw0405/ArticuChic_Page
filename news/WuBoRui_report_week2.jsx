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
  const title = "BoRui's work in the second week ";
  const date = "2024-03-17";
  const author = "Wu BoRui";

  const downloads = [
    {
      name: "request_analysis.xlsx",
      url: new URL("../ArticuChic/public/request_analysis.xlsx", import.meta.url).href,
      description: "this is the analysis of the whole project",
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
        <h3>This Week's Accomplishments</h3>
        <ul>
            <li>
                <strong>Work Content:</strong> The task involves analyzing the requirements for a lower limb rehabilitation monitoring system, which aims to track and assess the recovery process using angle sensors and mobile devices.
            </li>
            <li>
                <strong>Analysis Perspective:</strong> The analysis focuses on understanding the system's functional requirements, including data collection, processing, management, and display, to ensure accurate rehabilitation monitoring and personalized recovery feedback.
            </li>
            <li>
                <strong>Research Tools:</strong> The analysis utilizes various research methods and tools to ensure the system is effective and efficient. This includes:
                <ul>
                    <li><strong>System Documentation Review:</strong> Thorough examination of the system's design documents, functional specifications, and use cases to understand the requirements from both technical and user perspectives.</li>
                    <li><strong>Technical Specifications of Sensors:</strong> Research on the characteristics and capabilities of angle sensors (e.g., MEMS sensors like MPU-6050) to ensure accurate motion data capture with low power consumption and high precision.</li>
                    <li><strong>User Interface Design Guidelines:</strong> Review of best practices in designing user interfaces for healthcare applications, focusing on ease of use, accessibility, and clear data visualization for users at different technological proficiency levels.</li>
                    <li><strong>Machine Learning Algorithms:</strong> Investigation of trend prediction models, such as linear regression and time-series analysis (ARIMA), to provide forecasts on the patient's recovery progress and personalize rehabilitation recommendations.</li>
                    <li><strong>Data Privacy and Security Standards:</strong> Ensuring that the system adheres to data security protocols, including encryption methods for sensitive patient information and compliance with privacy regulations (such as GDPR or HIPAA).</li>
                </ul>
            </li>
        </ul>

        <div className="news-image">
          <img
            src={new URL("../ArticuChic/assets/wbr/p1.png", import.meta.url).href}
            alt="Project Launch"
          />
          <p className="image-caption">
            analysis sheet
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
