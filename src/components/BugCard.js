import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleBugStatus, deleteBug, editBug } from '../redux/actions/bugActions';

export const BugCard = ({ bug }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState(false);
  const titleRef = useRef(bug.title);
  const descriptionRef = useRef(bug.description);
  const severityRef = useRef(bug.severity);

  const handleEdit = () => {
    const updatedBug = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      severity: severityRef.current.value,
    };
    dispatch(editBug(bug.id, updatedBug));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`bug-card bug-${bug.status} severity-${bug.severity}`}>
        <div className="bug-header">
          <label style={{ fontSize: '1.2rem', padding: '8px', flex: 0.2 }} >Bug Title</label>
          <input
            type="text"
            ref={titleRef}
            defaultValue={bug.title}
            placeholder="Bug title"
            style={{ fontSize: '1.2rem', padding: '8px', flex: 1 }}
          />
        </div>
        <label style={{ fontSize: '1.2rem', padding: '8px', flex: 1 }}>Bug Description</label>
        <textarea
          ref={descriptionRef}
          defaultValue={bug.description}
          placeholder="Bug description"
          style={{ fontSize: '1rem', padding: '8px' , marginRight:'10px' , justifyContent: 'flex-start' }}
        />

        <select
          ref={severityRef}
          defaultValue={bug.severity}
          style={{ fontSize: '1rem', padding: '8px' }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>

        <div className="bug-actions">
          <button
            className="btn-toggle"
            onClick={handleEdit}
            style={{ borderColor: '#4caf50', color: '#4caf50' }}
          >
            ✓ Save
          </button>
          <button
            className="btn-delete"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bug-card bug-${bug.status} severity-${bug.severity}`}
    >
      <div className="bug-header">
        <h3>{bug.title}</h3>
        <span className={`status-badge ${bug.status}`}>
          {bug.status}
        </span>
      </div>

      {bug.description && (
        <p className="bug-description">{bug.description}</p>
      )}

      <div className="bug-meta">
        <span className={`severity-badge severity-${bug.severity}`}>
          {bug.severity.toUpperCase()}
        </span>
        <span className="created-date">{bug.createdAt}</span>
      </div>

      <div className="bug-actions">
        <button
          className={`btn-toggle ${bug.status}`}
          onClick={() => dispatch(toggleBugStatus(bug.id))}
        >
          {bug.status === 'open' ? '✓ Close' : '↺ Reopen'}
        </button>
        <button
          className="btn-delete"
          onClick={() => setIsEditing(true)}
          style={{ borderColor  : '#ff9800', color: '#ff9800' }}
        >
          ✎ Edit
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch(deleteBug(bug.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
