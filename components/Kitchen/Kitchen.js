import { useState } from "react";
import styles from "./Kitchen.module.scss";
import position from "data/positions";
import styleNames from "utilities/style-names";

export const Kitchen = ({ chefsPosition, setChefsPosition }) => {
  const [shakes, setShakes] = useState(false);
  const [hasBlood, setHasBlood] = useState(false);
  const [showBloodPool, setShowBloodPool] = useState(false);
  const bodyClick = (e) => {
    if (chefsPosition !== position.atTheChefsTableTouchingTheBody) {
      setShakes(true);
    }
    setChefsPosition(position.atTheChefsTableTouchingTheBody);
  };
  let rollingPinWhacks = 0;
  const chefClick = (e) => {
    e.target.classList.toggle(styles.ChefRollingPinWhack);
    rollingPinWhacks = rollingPinWhacks + 1;
    if (
      rollingPinWhacks === 2 &&
      chefsPosition === position.atTheChefsTableTouchingTheBody
    ) {
      setShakes(false);
      setHasBlood(true);
      // setShowBloodPool(true);
      rollingPinWhacks === 0;
    }
  };

  const saucePanClick = () => {
    setChefsPosition(position.atTheSaucepan);
  };

  return (
    <section className={styles.Kitchen}>
      <p>Kitchen</p>
      <div className={styles.SaucepanWrapper} onClick={saucePanClick}>
        <img src="./images/Saucepan.svg" alt="Saucepan" />
      </div>
      <div className={styles.BodyWrapper}>
        <img
          className={styleNames(styles, ["Body", shakes && "BodyShake"])}
          onClick={bodyClick}
          src="./images/Body.svg"
          alt="Body"
        />
        <img
          className={styleNames(styles, [
            "BloodPool",
            showBloodPool && "BloodPoolVisible",
          ])}
          src="./images/BloodPool.svg"
          alt="BloodPool"
        />
      </div>
      <div
        className={styleNames(styles, ["ChefWrapper", chefsPosition])}
        onClick={chefClick}
      >
        <img className={styles.Chef} src="./images/Chef.svg" alt="Body" />
        <img
          className={styles.RollingPin}
          src="./images/RollingPin.svg"
          alt="Rolling pin"
        />
        <img
          className={styleNames(styles, [
            "BloodOnTheChef",
            hasBlood && "BloodOnTheChefVisible",
          ])}
          src="./images/BloodOnChef.svg"
          alt="Blood on the chef"
        />
      </div>
      <div className={styles.TopWall}></div>
      <div className={styles.BottomWall}></div>
      <div className={styles.Door}></div>
    </section>
  );
};

export default Kitchen;
