import { useState } from "react";
import styles from "./Screen.module.scss";
import Clock from "@components/Clock/Clock";
import { Kitchen } from "@components/Kitchen/Kitchen";
import { Restaurant } from "@components/Restaurant/Restaurant";

export const Screen = () => {
  const [pauseTimer, setPauseTimer] = useState(false);

  return (
    <section className={styles.Screen}>
      <section className={styles.PlayableArea}>
        <Clock pauseTimer={pauseTimer} />
        <Kitchen />
        <Restaurant />
      </section>
    </section>
  );
};

export default Screen;
