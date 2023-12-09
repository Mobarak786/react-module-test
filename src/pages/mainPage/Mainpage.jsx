import React from "react";
import styles from "./Mainpage.module.css";
import Banner from "../../components/banner/Banner";
import Notes from "../../components/notes/Notes";

const Mainpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section_1}>
        <div className={styles.app_title}>
          <h1>Pocket Notes</h1>
        </div>
        <div className={styles.notes_list}>
          {[1, 2].map((item, i) => (
            <Notes i={i} />
          ))}
        </div>
        <div className={styles.add_button}>+</div>
      </div>
      <div className={styles.section_2}>
        <Banner />
      </div>
    </div>
  );
};

export default Mainpage;
