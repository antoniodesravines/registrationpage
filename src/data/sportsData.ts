import { Sport } from '../types';

// Static sports data
export const allSports: Sport[] = [
  {
    id: 'fall-3v3-boys',
    name: '3v3 Basketball',
    gender: 'Boys',
    season: 'fall',
    teamSize: 3,
    maxTeams: 12,
    registeredTeams: 5,
    registrationOpen: true,
    teams: [],
  },
  {
    id: 'fall-5v5-boys',
    name: '5v5 Preseason Basketball',
    gender: 'Boys',
    season: 'fall',
    teamSize: 5,
    maxTeams: 8,
    registeredTeams: 3,
    registrationOpen: true,
    teams: [],
  },
  {
    id: 'spring-3v3-girls',
    name: '3v3 Basketball',
    gender: 'Girls',
    season: 'spring',
    teamSize: 3,
    maxTeams: 10,
    registeredTeams: 0,
    registrationOpen: false,
    teams: [],
  },
  {
    id: 'spring-5v5-boys',
    name: '5v5 Basketball',
    gender: 'Boys',
    season: 'spring',
    teamSize: 5,
    maxTeams: 10,
    registeredTeams: 0,
    registrationOpen: false,
    teams: [],
  },
];

// Group sports by season
export const seasons = {
  fall: allSports.filter(sport => sport.season === 'fall'),
  spring: allSports.filter(sport => sport.season === 'spring'),
};

export const seasonLabels = {
  fall: 'Fall',
  spring: 'Spring',
};