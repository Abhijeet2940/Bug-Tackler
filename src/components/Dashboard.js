import React from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';

export const Dashboard = () => {
  const bugs = useSelector((state) => state.bugs);
  const dashboardRef = React.useRef();

  // Calculate statistics
  const totalBugs = bugs.length;
  const openBugs = bugs.filter((bug) => bug.status === 'open').length;
  const closedBugs = bugs.filter((bug) => bug.status === 'closed').length;

  // Count by severity
  const severityCount = {
    low: bugs.filter((bug) => bug.severity === 'low').length,
    medium: bugs.filter((bug) => bug.severity === 'medium').length,
    high: bugs.filter((bug) => bug.severity === 'high').length,
    critical: bugs.filter((bug) => bug.severity === 'critical').length,
  };

  // Export to PDF
  const handleExportPDF = () => {
    const element = dashboardRef.current;
    const opt = {
      margin: 10,
      filename: 'bug-tracker-dashboard.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };

    html2pdf().set(opt).from(element).save();
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Bug ID', 'Title', 'Description', 'Severity', 'Status', 'Created Date'];
    const rows = bugs.map((bug) => [
      bug.id,
      bug.title,
      bug.description,
      bug.severity,
      bug.status,
      bug.createdAt,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bug-tracker-data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dashboard-container">
      <h1>📊 Dashboard</h1>

      {/* Export Buttons */}
      <div className="export-buttons">
        <button className="export-btn pdf-btn" onClick={handleExportPDF}>
          📥 Export as PDF
        </button>
        <button className="export-btn csv-btn" onClick={handleExportCSV}>
          📥 Export as CSV
        </button>
      </div>

      {/* Dashboard Content (what gets exported) */}
      <div ref={dashboardRef} className="dashboard-content">
        {/* Statistics Cards */}
        <div className="stats-grid">
          <div className="stat-card total">
            <h3>Total Bugs</h3>
            <p className="stat-number">{totalBugs}</p>
          </div>

          <div className="stat-card open">
            <h3>Open Bugs</h3>
            <p className="stat-number">{openBugs}</p>
          </div>

          <div className="stat-card closed">
            <h3>Closed Bugs</h3>
            <p className="stat-number">{closedBugs}</p>
          </div>

          <div className="stat-card completion">
            <h3>Completion Rate</h3>
            <p className="stat-number">
              {totalBugs === 0 ? '0' : Math.round((closedBugs / totalBugs) * 100)}%
            </p>
          </div>
        </div>

        {/* Severity Distribution */}
        <div className="dashboard-section">
          <h2>🎯 Bugs by Severity</h2>
          <div className="severity-grid">
            <div className="severity-item low">
              <h4>Low</h4>
              <p>{severityCount.low}</p>
            </div>
            <div className="severity-item medium">
              <h4>Medium</h4>
              <p>{severityCount.medium}</p>
            </div>
            <div className="severity-item high">
              <h4>High</h4>
              <p>{severityCount.high}</p>
            </div>
            <div className="severity-item critical">
              <h4>Critical</h4>
              <p>{severityCount.critical}</p>
            </div>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="dashboard-section">
          <h2>📈 Status Overview</h2>
          <div className="status-bars">
            <div className="status-bar">
              <label>Open</label>
              <div className="bar-container">
                <div
                  className="bar-fill open"
                  style={{
                    width: `${totalBugs === 0 ? 0 : (openBugs / totalBugs) * 100}%`,
                  }}
                ></div>
              </div>
              <span>{openBugs}</span>
            </div>

            <div className="status-bar">
              <label>Closed</label>
              <div className="bar-container">
                <div
                  className="bar-fill closed"
                  style={{
                    width: `${totalBugs === 0 ? 0 : (closedBugs / totalBugs) * 100}%`,
                  }}
                ></div>
              </div>
              <span>{closedBugs}</span>
            </div>
          </div>
        </div>

        {/* Recent Bugs */}
        <div className="dashboard-section">
          <h2>🐛 Recent Bugs</h2>
          {bugs.length === 0 ? (
            <p>No bugs to display</p>
          ) : (
            <table className="bugs-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Severity</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {bugs.slice(0, 10).map((bug) => (
                  <tr key={bug.id}>
                    <td>{bug.title}</td>
                    <td>
                      <span className={`severity-badge severity-${bug.severity}`}>
                        {bug.severity}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${bug.status}`}>
                        {bug.status}
                      </span>
                    </td>
                    <td>{bug.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
