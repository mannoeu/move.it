import { useChallengesStore } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallengers.module.css";

export function CompletedChallengers() {
  const { challengesCompleted } = useChallengesStore();
  return (
    <div className={styles.completedChallengersContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
