import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-04-02";
  const author = "ArticuChic Team";

  const downloads = [
    {
      name: "RequirementAnalysisSpecification.pdf",
      url: new URL(
        "../../../ArticuChic/assets/cx/RequirementAnalysisSpecification.pdf",
        import.meta.url
      ).href,
      description: "System group requirement analysis specification document",
    },
    {
      name: "System.pdf",
      url: new URL("../../../ArticuChic/assets/cx/System.pdf", import.meta.url)
        .href,
      description: "System group use case diagram and system design document",
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
        <h2>1. System Group Use Case Diagram</h2>
        <p>
          Our team has successfully completed the use case diagram for the
          System group, which outlines all the key functionalities and
          interactions within our system component. The diagram provides a clear
          visualization of how different actors interact with our system and
          what use cases are supported.
        </p>

        <h2>2. System Group Requirement Analysis Documentation</h2>
        <p>
          We have completed the comprehensive requirement analysis documentation
          for the System group. This document includes:
        </p>
        <ul>
          <li>Detailed system requirements and specifications</li>
          <li>Functional and non-functional requirements</li>
          <li>System architecture and component interactions</li>
          <li>Interface specifications and data flow diagrams</li>
        </ul>

        <h2>3. Milestone Updates</h2>
        <p>
          We have updated the project milestones, which are now visible on the
          Home page. The updated milestones better reflect our current progress
          and future development plans.
        </p>

        <h2>4. Project Documentation Updates</h2>
        <p>The main project README.md has been updated to include:</p>
        <ul>
          <li>Updated team information and responsibilities</li>
          <li>Links to important project documents and resources</li>
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
