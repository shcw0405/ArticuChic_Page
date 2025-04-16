import React from "react";

/**
 * Team Weekly Report
 */

const NewsTemplate = () => {
  const title = "Team Weekly Report";
  const date = "2025-04-15";
  const author = "ArticuChic Team";

  const downloads = [
    {
      name: "SRS.html",
      url: new URL("../../../ArticuChic/assets/zyw/SRS.html", import.meta.url)
        .href,
      description: "Latest Use Case Document (HTML)",
    },
    {
      name: "SRS.md",
      url: new URL("../../../ArticuChic/assets/zyw/SRS.md", import.meta.url)
        .href,
      description: "Latest Use Case Document (Markdown)",
    },
    {
      name: "all.png",
      url: new URL("../../../ArticuChic/assets/zyw/all.png", import.meta.url)
        .href,
      description: "",
    },
    {
      name: "system_analysis.png",
      url: new URL(
        "../../../ArticuChic/assets/zyw/system_analysis.png",
        import.meta.url
      ).href,
      description: "",
    },
    {
      name: "system_data.png",
      url: new URL(
        "../../../ArticuChic/assets/zyw/system_data.png",
        import.meta.url
      ).href,
      description: "",
    },
    {
      name: "system_ui.png",
      url: new URL(
        "../../../ArticuChic/assets/zyw/system_ui.png",
        import.meta.url
      ).href,
      description: "",
    },
    {
      name: "INTERNAL data flow.pdf",
      url: new URL(
        "../../../ArticuChic/assets/yang/INTERNAL data flow.pdf",
        import.meta.url
      ).href,
      description: "V0 Data Flow Document",
    },
    {
      name: "System组测试文档_V0.docx",
      url: new URL(
        "../../../ArticuChic/assets/wbr/System组测试文档_V0.docx",
        import.meta.url
      ).href,
      description: "V0 Test Document",
    },
    // Add V0 test document here if available
  ];

  return (
    <div className="news-container">
      <h1>{title}</h1>
      <div className="news-meta">
        <span>Publication Date: {date}</span>
        <span>Author: {author}</span>
      </div>

      <div className="news-content">
        <h2>1. Use Case Document Update</h2>
        <p>
          This week, we have comprehensively updated the system use case
          documentation, supplementing and improving the functional
          descriptions, flows, and interaction details of each module. Please
          refer to the attached SRS documents (available in both HTML and
          Markdown formats).
        </p>

        <h2>2. V0 Data Flow Document</h2>
        <p>
          The V0 version data flow document has been completed, clarifying the
          data transfer and interface relationships between internal modules,
          providing a clear reference for subsequent development and testing.
        </p>

        <h2>3. V0 Test Document</h2>
        <p>
          The initial V0 test document has been organized, covering the main
          functional points. We will continue to improve the test cases and
          coverage to ensure system quality.
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
