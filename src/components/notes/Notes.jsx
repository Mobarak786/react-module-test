import React, { useState } from "react";
import styles from "./Notes.module.css";
import { Trim1Letter, Trim2Letters } from "../../functions";

const Notes = ({ colour, name }) => {
  return (
    <div className={styles.note}>
      <div style={{ backgroundColor: colour }}>
        {name.split(" ").length > 1 ? Trim2Letters(name) : Trim1Letter(name)}
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Notes;
