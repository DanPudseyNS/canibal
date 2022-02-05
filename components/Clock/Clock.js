import { useState, useEffect, useRef } from "react";
import styles from "./Clock.module.scss";

export const Clock = () => {
  const [time, setTime] = useState(100);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseTime = () => setTime((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseTime, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseTime, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <section>
      <div className={styles.Clock}>{time}</div>
      {/* <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button> */}
    </section>
  );
};

export default Clock;
