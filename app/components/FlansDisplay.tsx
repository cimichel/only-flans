import React from "react";
import GimmeDesert from "./GimmeDesert";
import styles from "app/components/FlansDisplay.css";

const FlansDisplay = () => {
  return (
    <div className={styles.card}>
      <GimmeDesert />
    </div>
  );
};

export default FlansDisplay;
