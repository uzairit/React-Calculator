import React from "react";
import styles from "./Display.module.css";
export default function Display({displayVal}) {
  return <input type="text" value={displayVal} readOnly className={styles.displayScreen} />;
}