import React from 'react';
import AllCountriesStats from './AllCountriesStats';
import GlobalStats from './GlobalStats';

export default function InfoPanel({ currentScreen }) {
  if (currentScreen === 0)
    return <GlobalStats />
  else if (currentScreen === 1)
    return <AllCountriesStats />
  else return <GlobalStats />
}
