import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-05-07";
  const author = "System Architecture Team";

  const downloads = [
    {
      name: "SDS_v1.md",
      url: new URL("../../../ArticuChic/public/zyw/SDS_v1.md", import.meta.url)
        .href,
      description: "Software Design Specification v1 Document",
    },
    {
      name: "DataAPI.md",
      url: new URL("../../../ArticuChic/assets/cx/DataAPI.md", import.meta.url)
        .href,
      description: "System-Data Teams API Documentation",
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
        <h2>1. Software Design Specification (SDS) v1 Completion</h2>
        <p>
          This week, we completed the Software Design Specification (SDS) v1
          document, which provides a overview of the system's architecture and
          data flow. This specification serves as a foundation for all
          development teams to understand the system's structure and
          functionality.
        </p>

        <h2>2. Data Control Flow Implementation</h2>
        <p>
          We finalized the system's data and control flow diagram, visualizing
          all interactions between different user roles (Admin, Doctor, Patient)
          and database components. The diagram clearly illustrates the
          authentication process, database queries/modifications, patient
          management workflow, and data comparison/presentation modules. This
          visual representation helps development teams understand the system's
          operational logic and data pathways.
        </p>

        <div className="news-image">
          <img
            src={
              new URL(
                "../../../ArticuChic/public/zyw/data_control_flow.png",
                import.meta.url
              ).href
            }
            alt="Project Launch"
          />
          <p className="image-caption"></p>
        </div>
        <h2>3. System-Data Team API Documentation</h2>
        <p>
          We developed a comprehensive API documentation detailing the
          interaction between the System and Data teams. The document defines
          clear interfaces for user authentication, doctor/patient management,
          report generation, and data processing. It includes specific
          repository interface requirements, entity design specifications, and
          guidelines for handling relationships between users, doctors, and
          patients. This documentation ensures both teams can work efficiently
          with a clear understanding of responsibilities and expectations.
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
