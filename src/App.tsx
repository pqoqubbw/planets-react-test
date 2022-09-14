import React from 'react';

import { planets } from './data';
import MoonsPlanetsList from './components/moonsPlanetsList/MoonsPlanetsList';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      {planets.map((planet) => (
        <MoonsPlanetsList planet={planet} key={planet.title} />
      ))}
    </div>
  );
};
