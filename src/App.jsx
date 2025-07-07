import React from 'react';
import Header from './components/Header';
import OfferedSports from './components/sports/OfferedSports';

/**
 * App Component
 *
 * Main application layout:
 * - Shows the Header
 * - Renders the OfferedSports page
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <OfferedSports />
      </main>
    </div>
  );
}

export default App;
