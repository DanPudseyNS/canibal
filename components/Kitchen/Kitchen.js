import classNames from "classnames";
import styles from "./Kitchen.module.scss";
import position from "data/positions";
import styleNames from "utilities/style-names";

export const Kitchen = ({ chefsPosition, setChefsPosition }) => {
  const bodyClick = (e) => {
    e.target.classList.toggle(styles.BodyShake);
    setChefsPosition(position.atTheChefsTableTouchingTheBody);
  };
  console.log(chefsPosition);
  return (
    <section className={styles.Kitchen}>
      <p>Kitchen</p>
      <div className={styles.BodyWrapper}>
        <img
          className={styles.Body}
          onClick={bodyClick}
          src="./images/Body.svg"
          alt="Body"
        />
      </div>
      <div className={styleNames(styles, ["ChefWrapper", chefsPosition])}>
        <img src="./images/Chef.svg" alt="Body" />
      </div>
      <div className={styles.TopWall}></div>
      <div className={styles.BottomWall}></div>
      <div className={styles.Door}></div>
    </section>
  );
};

export default Kitchen;
