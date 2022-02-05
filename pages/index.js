import React, { useState } from "react";
import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import Screen from "@components/Screen";
import styles from "./Index.module.scss";

export const Home = () => {
  const [seeIntro, setSeeIntro] = useState(true);
  const introMessage = () => {
    setSeeIntro(false);
  };

  return (
    <div className="container">
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
              <Header title="Welcome to restaurant Canibål" />
              <div className={styles.ButtonWrapper}>
                <button onClick={introMessage}>Play</button>
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
