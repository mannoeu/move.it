import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallengers />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      <Head>
        <title>Home | move.it</title>
      </Head>
    </div>
  );
}
