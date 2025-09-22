import React from "react";
import styles from "./Buttons.module.css";
function Buttons({ buttonsData,onButtonClick }) {
  return (
    <>
      <div className={styles.buttonsGrid}>
        {buttonsData.map((buttonName, i) => (
          <button key={i} onClick={()=>onButtonClick(buttonName)} className={`${styles.calcButton} 
            ${buttonName === "=" ? `${styles.equalButton}` : ""} 
            ${["+", "-", "/", "*"].includes(buttonName) ? `${styles.operatorButton}` : ""} 
            ${buttonName === "C" ? `${styles.clearButton}` : ""}`}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;