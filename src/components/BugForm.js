import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFormTitle,
  setFormDescription,
  setFormSeverity,
  addBug,
  resetForm,
} from '../redux/actions/bugActions';

export const BugForm = () => {
  const dispatch = useDispatch();
  const { title, description, severity } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newBug = {
        id: Date.now(),
        title,
        description,
        severity,
        status: 'open',
        createdAt: new Date().toLocaleDateString(),
      };
      dispatch(addBug(newBug));
      dispatch(resetForm());
    }
  };

  return (
    <div className="form-section">
      <h2>Report a New Bug</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Bug Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => dispatch(setFormTitle(e.target.value))}
            placeholder="Enter bug title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => dispatch(setFormDescription(e.target.value))}
            placeholder="Describe the bug (optional)"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="severity">Severity Level</label>
          <select
            id="severity"
            value={severity}
            onChange={(e) => dispatch(setFormSeverity(e.target.value))}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">
          Add Bug
        </button>
      </form>
    </div>
  );
};
