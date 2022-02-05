import { useState } from "react";
import Head from "next/head";
import Screen from "@components/Screen/Screen";
import ReactTypingEffect from "react-typing-effect";
import styles from "./Index.module.scss";

export const Home = () => {
  const [seeIntro, setSeeIntro] = useState(true);
  const [messageNumber, setMessageNumber] = useState(1);
  const [buttonMessage, setButtonMessage] = useState("Next");
  const introMessage = () => {
    setMessageNumber(messageNumber + 1);
    if (messageNumber === 1) setButtonMessage("Play");
    if (messageNumber === 2) {
      setSeeIntro(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Canibål</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Short+Stack&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {seeIntro && (
          <section className={styles.IntroWrapper}>
            <div className={styles.Intro}>
              <header className={styles.Header}>
                <div className="Header__Chef">
                  <img src="./images/chef.png" alt="Chef's Kiss" />
                </div>
                {messageNumber === 1 && (
                  <h1>
                    <ReactTypingEffect
                      text={["Welcome to restaurant Canibål"]}
                      typingDelay={10}
                      speed={25}
                      eraseDelay={1000000}
                    />
                  </h1>
                )}
                {messageNumber === 2 && (
                  <h1>
                    <ReactTypingEffect
                      text={["We must serve our guests!"]}
                      typingDelay={10}
                      speed={25}
                      eraseDelay={1000000}
                    />
                  </h1>
                )}
              </header>
              <div className={styles.ButtonWrapper}>
                <button onClick={introMessage}>{buttonMessage}</button>
              </div>
            </div>
          </section>
        )}
        {!seeIntro && <Screen />}
      </main>
    </div>
  );
};

export default Home;
