# 🐛 Bug Tackler

A professional bug tracking and management application built with **React**, **Redux**, and **CSS**. Track, manage, and export bug reports with ease.

    ## Features

    ✨ **Core Functionality:**
    - ➕ **Add Bugs** - Create new bug reports with title, description, and severity level
    - ✏️ **Edit Bugs** - Modify bug details after creation
    - 🗑️ **Delete Bugs** - Remove bugs from the tracker
    - 🔄 **Toggle Status** - Mark bugs as open or closed
    - 🔍 **Search** - Find bugs by title or description
    - 🏷️ **Filter** - Filter bugs by status (All, Open, Closed)
    - 💾 **Persistent Storage** - All data saves automatically to localStorage
    - 📊 **Dashboard** - View comprehensive statistics and bug analytics
    - 📥 **Export Options** - Export dashboard and bug data as PDF or CSV

    ## Tech Stack

    - **Frontend Framework:** React 19.2.4
    - **State Management:** Redux
    - **Styling:** CSS3 (Responsive Design)
    - **Export Library:** html2pdf.js
    - **Local Storage:** Browser localStorage API
    - **Build Tool:** Create React App

    ## Installation

    ### Prerequisites
    - Node.js (v14+)
    - npm or yarn

    ### Setup Steps

    1. **Clone or navigate to the project directory**
    ```bash
    cd bug-tackler
    ```

    2. **Install dependencies**
    ```bash
    npm install
    ```

    3. **Install PDF export library**
    ```bash
    npm install html2pdf.js
    ```

    4. **Start the development server**
    ```bash
    npm start
    ```

    5. **Open in browser**
    - Navigate to `http://localhost:3000`

    ## Usage

    ### Bug Tracker View
    1. **Add a Bug:**
    - Enter bug title, description, and select severity level
    - Click "Add Bug" to create the bug
    - Bug appears in the list below

    2. **Search for Bugs:**
    - Use the search bar to find bugs by title or description
    - Results update in real-time

    3. **Filter Bugs:**
    - Use filter buttons (All, Open, Closed) to view specific bug statuses
    - Combine with search for advanced filtering

    4. **Edit a Bug:**
    - Click "Edit" on any bug card
    - Modify the details in the edit form
    - Click "Update" to save changes

    5. **Toggle Bug Status:**
    - Click "Toggle Status" to mark a bug as open/closed
    - Status badge updates immediately

    6. **Delete a Bug:**
    - Click "Delete" to remove the bug permanently

    ### Dashboard View
    1. **View Statistics:**
    - Total bugs count
    - Open and closed bug counts
    - Completion rate percentage

    2. **Analyze Data:**
    - View bug distribution by severity
    - See status overview with progress bars
    - Check recent bugs in the table

    3. **Export Data:**
    - Click "Export as PDF" to download dashboard as PDF file
    - Click "Export as CSV" to export bug data in CSV format

## Project Structure

```
bug-tackler/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BugForm.js          # Add new bugs form
│   │   ├── BugList.js          # Display and filter bugs
│   │   ├── BugCard.js          # Individual bug display
│   │   ├── Searchbar.js        # Search functionality
│   │   └── Dashboard.js        # Statistics and analytics
│   ├── redux/
│   │   ├── store.js            # Redux store configuration
│   │   ├── actions/
│   │   │   └── bugActions.js   # Action creators
│   │   ├── reducers/
│   │   │   └── bugReducer.js   # State reducer logic
│   │   └── actionTypes.js      # Action type constants
│   ├── utils/
│   │   └── localstorage.js     # localStorage utilities
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   ├── index.js                # React entry point
│   └── index.css               # Base styles
├── package.json
└── README.md
```

## Key Components

### BugForm.js
- Form to add new bugs
- Validates input (all fields required)
- Dispatches `addBug` action to Redux store
- Resets form after submission

### BugList.js
- Displays all bugs with filtering and search
- Combines status and search term filters
- Shows bug count and "no bugs" empty state
- Integrates SearchBar and FilterBar

### BugCard.js
- Individual bug display with all details
- Edit mode with uncontrolled inputs
- Toggle and delete buttons
- Severity and status badges

### Dashboard.js
- Statistics cards (total, open, closed, completion rate)
- Severity distribution grid
- Status overview with progress bars
- Recent bugs table (top 10)
- PDF and CSV export functionality

### Redux Store
**State Structure:**
```javascript
{
  bugs: [
    {
      id: 1712560000000,
      title: "Login button not working",
      description: "Users cannot login with email",
      severity: "high",
      status: "open",
      createdAt: "2026-04-08"
    },
    // ... more bugs
  ],
  filter: "all",           // "all", "open", or "closed"
  searchTerm: "",
  form: {
    title: "",
    description: "",
    severity: "medium"
  }
}
```

### Development
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view.

### Build
```bash
npm run build
```
Builds the app for production to the `build` folder.

**Features:**
- Automatic save on every state change
- Auto-load on app startup
- Error handling with fallback to default state
- Manual clear option available

