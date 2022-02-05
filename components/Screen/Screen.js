import { useState, useEffect } from "react";
import styles from "./Screen.module.scss";
import Clock from "@components/Clock/Clock";
import { Kitchen } from "@components/Kitchen/Kitchen";
import { Restaurant } from "@components/Restaurant/Restaurant";
import position from "data/positions";

export const Screen = () => {
  const [pauseTimer, setPauseTimer] = useState(false);

  // Set the default chefs position
  const [chefsPosition, setChefsPosition] = useState(position.atTheChefsTable);

  // Update the chefs position when clicking around the playable area

  return (
    <section className={styles.Screen}>
      <section className={styles.PlayableArea}>
        <Clock pauseTimer={pauseTimer} />
        <Kitchen
          chefsPosition={chefsPosition}
          setChefsPosition={setChefsPosition}
        />
        <Restaurant
          chefsPosition={chefsPosition}
          setChefsPosition={setChefsPosition}
        />
      </section>
      <header className={styles.Position}>{chefsPosition}</header>
    </section>
  );
};

export default Screen;
