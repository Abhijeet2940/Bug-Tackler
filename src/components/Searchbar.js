import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, clearSearch } from '../redux/actions/bugActions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchRef = useRef('');

  const handleSearch = () => {
    const searchTerm = searchRef.current.value;
    dispatch(setSearchTerm(searchTerm));
  };

  const handleClear = () => {
    searchRef.current.value = '';
    dispatch(clearSearch());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        ref={searchRef}
        placeholder="Search bugs..."
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
      <button className="search-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

