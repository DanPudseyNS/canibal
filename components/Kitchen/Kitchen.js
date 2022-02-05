import styles from "./Kitchen.module.scss";

export const Kitchen = () => {
  const bodyClick = (e) => {
    e.target.classList.toggle(styles.BodyShake);
  };
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
      <div className={styles.ChefWrapper}>
        <img src="./images/Chef.svg" alt="Body" />
      </div>
      <div className={styles.TopWall}></div>
      <div className={styles.BottomWall}></div>
      <div className={styles.Door}></div>
    </section>
  );
};

export default Kitchen;
