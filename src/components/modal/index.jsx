import React from "react";
import styles from "./styles.module.css";
export default function Modal({ children, modal }) {
  if (!modal) {
    return;
  }
  return <div className={styles.modalContainer}>{children}</div>;
}
