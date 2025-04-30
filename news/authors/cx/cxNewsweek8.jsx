import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-04-30";
  const author = "System Architecture Team";

  const downloads = [
    {
      name: "API_Documentation.pdf",
      url: new URL("../../../ArticuChic/assets/cx/api(9).pdf", import.meta.url)
        .href,
      description: "Final API Documentation (PDF)",
    },
    {
      name: "Database_Structure.sql",
      url: new URL(
        "../../../ArticuChic/assets/cx/Dump20250427.sql",
        import.meta.url
      ).href,
      description: "Latest Database Structure Export (SQL)",
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
        <h2>1. Completed Final API Documentation</h2>
        <p>
          This week, we collaborated closely with the UI team to finalize the
          system's API documentation. The document comprehensively defines
          frontend-backend interfaces, including request parameters, response
          formats, and error handling mechanisms, providing a clear reference
          standard for subsequent development and integration.
        </p>

        <h2>2. Enhanced Database Design</h2>
        <p>
          Based on system requirements and business processes, we further
          refined the database design, including the definition of table
          structures for user information, doctor information, patient
          information, raw data, formatted data, and reports. The database
          structure has been optimized to effectively support system
          functionality and data storage requirements.
        </p>

        <h2>3. Completed SpringBoot Backend Framework</h2>
        <p>
          Successfully implemented a SpringBoot-based database management
          framework. Project repository:{" "}
          <a href="https://github.com/shcw0405/DSD_project2025" target="_blank">
            https://github.com/shcw0405/DSD_project2025
          </a>
        </p>

        {/* File Download List */}
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
