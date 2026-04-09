import './App.css';
import { useState } from 'react';
import { BugForm } from './components/BugForm';
import { BugList } from './components/BugList';
import { Dashboard } from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('tracker');

  return (
    <div className="App">
      <header className="app-header">
        <h1>🐛 Bug Tackler</h1>
        <p>Track and manage your bugs efficiently</p>
      </header>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button
          className={`nav-btn ${currentView === 'tracker' ? 'active' : ''}`}
          onClick={() => setCurrentView('tracker')}
        >
          Bug Tracker
        </button>
        <button
          className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="container">
        {currentView === 'tracker' && (
          <>
            <BugForm />
            <BugList />
          </>
        )}
        {currentView === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
}

export default App;