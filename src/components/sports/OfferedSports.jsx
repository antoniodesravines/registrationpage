import React from 'react';
import { seasons, seasonLabels } from '../../data/sportsData';
import SportCard from './SportCard';

/**
 * OfferedSports Component
 *
 * This component displays all sports offered, grouped by season.
 * - Uses static `seasons` and `seasonLabels` data to render the sections.
 * - Each sport is displayed via the SportCard component.
 * - Includes a legend showing registration status indicators.
 */
const OfferedSports = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800">Offered Sports</h2>

      {/* Registration Status Legend */}
      <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 flex items-center">
        <div className="text-sm">
          <p className="font-medium mb-1">Registration Status:</p>
          <div className="flex items-center space-x-4">
            {/* Registration Open Indicator */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#194A8D] rounded-full mr-1.5"></div>
              <span>Registration Open</span>
            </div>
            {/* Registration Closed Indicator */}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-1.5"></div>
              <span>Registration Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Loop through each season and render sports */}
      {Object.entries(seasons).map(([season, sports]) => (
        <div key={season} className="space-y-4">
          {/* Season Heading */}
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            {seasonLabels[season]} Season
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {sports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferedSports;
