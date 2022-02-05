import styles from "./Header.module.scss";
import ReactTypingEffect from "react-typing-effect";

export const Header = ({ title }) => {
  return (
    <header className={styles.Header}>
      <div className="Header__Chef">
        <img src="./images/chef.png" alt="Chef's Kiss" />
      </div>
      <h1>
        <ReactTypingEffect
          text={[title]}
          typingDelay={10}
          speed={25}
          eraseDelay={1000000}
        />
      </h1>
    </header>
  );
};
export default Header;
