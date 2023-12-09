import React from "react";
import styles from "./Banner.module.css";
import banner from "../../assets/images/banner.png";
import lock from "../../assets/icons/lock.png";

const Banner = () => {
  return (
    <div className={styles.banner_sec}>
      <img alt="banner" src={banner} />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.encryption}>
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  );
};

export default Banner;
