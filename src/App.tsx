import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
