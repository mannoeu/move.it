import styles from "../styles/components/CompletedChallengers.module.css";

export function CompletedChallengers() {
  return (
    <div className={styles.completedChallengersContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
