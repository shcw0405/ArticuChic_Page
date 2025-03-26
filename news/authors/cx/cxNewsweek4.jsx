import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-03-26";
  const author = "ArticuChic Team";

  const downloads = [
    {
      name: "SDS.md",
      url: new URL("../../../ArticuChic/assets/zyw/SDS.md", import.meta.url)
        .href,
      description:
        "Software Design Specification document with module-wise analysis",
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
        <h2>1. Model Division</h2>
        <p>
          Our team has successfully completed the model division according to
          the system architecture diagram. The model has been divided into four
          main components:
        </p>
        <ul>
          <li>
            <strong>Data</strong>: Responsible for sensor connection, data
            transfer, storage, and retrieval
          </li>
          <li>
            <strong>Analysis</strong>: Handles data processing, simulation,
            comparison, and suggestion generation
          </li>
          <li>
            <strong>UI</strong>: Manages visualization and user interface
            components
          </li>
          <li>
            <strong>System</strong>: Coordinates services and landry operations
            across other teams
          </li>
        </ul>
        <p>
          The modularization approach follows a clear workflow from data
          collection through analysis to visualization, with system services
          providing support throughout the process.
        </p>

        <h2>2. Module Distribution</h2>
        <p>
          Module distribution has been completed among team members. Our team
          has been assigned responsibility for the <strong>System</strong>{" "}
          component, which includes:
        </p>
        <ul>
          <li>Coordinating services across all modules</li>
          <li>Managing landry operations</li>
          <li>
            Ensuring proper integration between data, analysis, and UI
            components
          </li>
          <li>Providing infrastructure support for the entire application</li>
        </ul>

        <h2>3. External Requirement Analysis Documentation</h2>
        <p>
          Our team has completed comprehensive requirement analysis
          documentation for both medical staff and patients. The analysis
          includes:
        </p>
        <ul>
          <li>Detailed user needs assessment for medical professionals</li>
          <li>Patient-centered requirements and expectations</li>
          <li>
            Documentation in both Chinese and English versions to ensure
            accessibility
          </li>

          <li>Prioritized feature lists based on stakeholder feedback</li>
          <li>
            <a href="/#/news/WuBoRui_report_week3">
              Available Files for Download
            </a>
          </li>
        </ul>

        <h2>4. Module-wise Requirement Analysis Documentation</h2>
        <p>
          The Software Design Specification (SDS) document has been created to
          detail the module-wise analysis. Key highlights include:
        </p>
        <ul>
          <li>
            <strong>System Design</strong>: The software system is divided into
            three parts - router (for request handling), server (for request
            fulfillment), and data collector (for information gathering)
          </li>
          <li>
            <strong>Architecture</strong>: Workflow diagrams illustrate the
            system's operation and component interactions
          </li>
          <li>
            <strong>Class Design</strong>: Detailed class structures including
            User, Status (with various state implementations), and other core
            components
          </li>
          <li>
            <strong>Use Case Analysis</strong>: Comprehensive use case diagrams
            showing system functionality from user perspectives
          </li>
        </ul>

        <h2>5. Milestone Definition</h2>
        <p>
          We have updated the milestone definitions for the project timeline.
          The key milestones are:
        </p>
        <ul>
          <li>
            <strong>Basic Model v0 & Basic Documentation</strong> (Week 6):
            Completion of the basic model with functioning data links and
            fundamental documentation
          </li>
          <li>
            <strong>MVP & Documentation</strong> (Week 8): Delivery of the
            Minimum Viable Product with comprehensive documentation
          </li>
          <li>
            <strong>Complete Project & Documentation</strong> (Week 11): Final
            project delivery with full documentation and all features
            implemented
          </li>
        </ul>

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
