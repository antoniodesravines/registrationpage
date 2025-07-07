import React from 'react';

/**
 * SportCard Component
 *
 * This component displays a card with information about a sport.
 * - Shows sport name, gender, and team registration counts.
 * - Includes a register button with hover/focus styles.
 * - Button and click handlers are static (do nothing) in this demo version.
 *
 * Props:
 * - sport: {
 *     id: string | number,
 *     name: string,
 *     gender: string,
 *     registeredTeams: number,
 *     maxTeams: number,
 *     registrationOpen: boolean
 *   }
 */
const SportCard = ({ sport }) => {
  // For this static demo, assume user is never registered
  const isRegistered = false;

  // Click handler for the register button (disabled in demo)
  const handleRegisterClick = (e) => {
    e.stopPropagation();
    // No-op
  };

  // Click handler for the card itself (disabled in demo)
  const handleCardClick = () => {
    // No-op
  };

  // Determine the button text based on status
  const getRegisterButtonText = () => {
    if (isRegistered) return 'Registered';
    if (!sport.registrationOpen) return 'Closed';
    return 'Register';
  };

  // Determine the button CSS classes
  const getRegisterButtonClass = () => {
    if (isRegistered || !sport.registrationOpen) {
      return 'bg-gray-300 text-gray-500 cursor-not-allowed';
    }
    return 'bg-[#194A8D] text-white hover:bg-[#3366AA] transition-colors duration-200';
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          {/* Sport Name and Gender */}
          <div className="flex-1">
            <h3 className="font-bold text-xl text-[#194A8D] mb-2">{sport.name}</h3>
            <p className="text-gray-600 text-lg">{sport.gender}</p>
          </div>

          {/* Teams count and register button */}
          <div className="text-right">
            <span className="text-sm text-gray-500 block mb-2">
              Teams: {sport.registeredTeams}/{sport.maxTeams}
            </span>
            <button
              onClick={handleRegisterClick}
              disabled={isRegistered || !sport.registrationOpen}
              className={`px-4 py-2 rounded font-medium ${getRegisterButtonClass()}`}
            >
              {getRegisterButtonText()}
            </button>
          </div>
        </div>
      </div>

      {/* Registration status indicator bar */}
      <div
        className={`h-2 w-full ${sport.registrationOpen ? 'bg-[#194A8D]' : 'bg-gray-400'}`}
      ></div>
    </div>
  );
};

export default SportCard;
