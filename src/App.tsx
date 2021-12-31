import React from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className={styles.root}>
      <Navigation />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
