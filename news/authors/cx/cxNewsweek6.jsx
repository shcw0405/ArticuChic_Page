import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-04-09";
  const author = "ArticuChic Team";

  const downloads = [
    {
      name: "RequirementAnalysisSpecification_EG.pdf",
      url: new URL(
        "../../../ArticuChic/assets/cx/RequirementAnalysisSpecification_EG.pdf",
        import.meta.url
      ).href,
      description:
        "English version of System group requirement analysis specification document",
    },
    {
      name: "TechnicalRoadmap_EN.pdf",
      url: new URL(
        "../../../ArticuChic/assets/cx/TechnicalRoadmap_EN.pdf",
        import.meta.url
      ).href,
      description: "English version of System group technical roadmap document",
    },
    {
      name: "TechnicalRoadmap_CN.pdf",
      url: new URL(
        "../../../ArticuChic/assets/cx/TechnicalRoadmap.pdf",
        import.meta.url
      ).href,
      description: "Chinese version of System group technical roadmap document",
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
        <h2>1. English Version of Requirement Analysis Documentation</h2>
        <p>
          We have completed and provided the English version of the requirement
          analysis documentation, making it more accessible for international
          team members and stakeholders.
        </p>

        <h2>2. Technical Roadmap Documentation</h2>
        <p>
          We have created comprehensive technical roadmap documents in both
          English and Chinese versions, which outline the complete project
          development plan and technical architecture.
        </p>

        <h2>3. Technical Validation and Testing</h2>
        <p>We have conducted several technical validations and tests:</p>
        <ul>
          <li>
            <strong>Data Volume Analysis</strong>:
            <ul>
              <li>Single device generates 222KB data in 2 minutes</li>
              <li>Four devices generate 1MB data in 2 minutes</li>
              <li>Web client capacity limit is approximately 5MB</li>
              <li>
                Conclusion: Computation tasks cannot be performed on the client
                side due to data volume constraints
              </li>
            </ul>
          </li>
          <li>
            <strong>Bluetooth Data Collection</strong>: Successfully verified
            that web client can execute code to connect with Bluetooth devices
            for data collection
          </li>
        </ul>

        <h2>4. Milestone Updates</h2>
        <p>
          We have updated the project milestones to English version for better
          international collaboration. The milestones are now more clearly
          defined and accessible to all team members.
        </p>

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
