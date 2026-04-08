import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearAllBugs } from '../redux/actions/bugActions';
import { BugCard } from './BugCard';
import { SearchBar } from './Searchbar';

export const BugList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredBugs = bugs.filter((bug) => {
    // First filter by status
    let statusMatch = true;
    if (filter === 'open') statusMatch = bug.status === 'open';
    if (filter === 'closed') statusMatch = bug.status === 'closed';

    // Then filter by search term
    let searchMatch = true;
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      searchMatch = 
        bug.title.toLowerCase().includes(searchLower) ||
        bug.description.toLowerCase().includes(searchLower);
    }

    return statusMatch && searchMatch;
  });

  const openCount = bugs.filter((b) => b.status === 'open').length;
  const closedCount = bugs.filter((b) => b.status === 'closed').length;

  return (
    <div className="bugs-section">
      <h2>Bug List</h2>
      <SearchBar />

      <div className="filter-section">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('all'))}
        >
          All ({bugs.length})
        </button>
        <button
          className={`filter-btn ${filter === 'open' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('open'))}
        >
          Open ({openCount})
        </button>
        <button
          className={`filter-btn ${filter === 'closed' ? 'active' : ''}`}
          onClick={() => dispatch(setFilter('closed'))}
        >
          Closed ({closedCount})
        </button>
      </div>

      {filteredBugs.length === 0 ? (
        <div className="no-bugs">
          <p>No bugs to display. Great job! 🎉</p>
        </div>
      ) : (
        <div className="bugs-list">
          {filteredBugs.map((bug) => (
            <BugCard key={bug.id} bug={bug} />
          ))}
        </div>
      )}
      <button onClick={() => dispatch(clearAllBugs())}>
        Clear All Data
      </button>
    </div>
  );
};
