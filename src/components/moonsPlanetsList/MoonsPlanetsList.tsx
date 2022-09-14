import React, { useCallback, useState } from 'react';

import { type Moon, type Planet as PlanetType, moons } from '../../data';
import Moons from '../moons/Moons';
import Planet from '../planet/Planet';

import styles from './MoonsPlanetsList.module.css';

interface Props {
  planet: PlanetType;
}

const MoonsPlanetsList = ({ planet }: Props) => {
  const [selectedMoons, setSelectedMoons] = useState<Moon[]>([]);

  const checkIsSelectedMoon = useCallback(
    (moon: Moon) => !!selectedMoons.find((selectedMoon) => selectedMoon.id === moon.id)?.title,
    [selectedMoons],
  );

  const handleSelectPlanet = useCallback(
    (moon: Moon) => {
      const isAlreadySelected = checkIsSelectedMoon(moon);

      if (isAlreadySelected) {
        setSelectedMoons(selectedMoons.filter((selectedMoon) => selectedMoon.id !== moon.id));
      } else {
        setSelectedMoons([...selectedMoons, moon]);
      }
    },
    [checkIsSelectedMoon, selectedMoons],
  );

  return (
    <div key={planet.title} className={styles.wrapper}>
      <Planet
        title={planet.title}
        selectedCounter={selectedMoons.length === 0 ? null : selectedMoons.length}
      />
      <div className={styles.moonWrapper}>
        {moons
          .filter((moon) => moon.planetId === planet.id)
          .map((moon) => (
            <Moons
              handleSelect={() => handleSelectPlanet(moon)}
              moon={moon}
              isSelected={checkIsSelectedMoon(moon)}
              key={moon.title}
            />
          ))}
      </div>
    </div>
  );
};

export default MoonsPlanetsList;
