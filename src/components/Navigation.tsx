import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.root}>
      <div className={styles.navbar}>
        <div>
          <Link className={styles.link_home} to="/">
            Yotta
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="/calc">
            Calculator
          </Link>
        </div>
        <div>
          <Link className={styles.link} to="/spending">
            Spending
          </Link>
        </div>
      </div>
      <div className={styles.wave} />
    </nav>
  );
}
