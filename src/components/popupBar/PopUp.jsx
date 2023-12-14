import React, { useEffect, useState } from "react";
import styles from "./PopUp.module.css";
import { Colours } from "../../functions";
const PopUp = ({
  setCreate,
  setNoteName,
  setColourCode,
  setShowPopup,
  noteName,
  colourCode,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    if (noteName.length && colourCode.length) {
      setShowPopup(false);
      setCreate(true);
    }
  };
  useEffect(() => {
    noteName.length && colourCode.length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [noteName, colourCode]);

  return (
    <div className={styles.popUp_bar}>
      <h2>Create New group</h2>
      <div className={styles.name_input}>
        <h2>Group name</h2>
        <input
          required
          placeholder="Enter group name"
          type="text"
          value={noteName}
          name="noteName"
          onChange={(e) => setNoteName(e.target.value)}
        />
      </div>
      <div className={styles.colour_input}>
        <h2>Choose colour</h2>
        <div>
          {Colours.map((colour) => (
            <button
              key={colour}
              style={{ backgroundColor: colour }}
              onClick={() => setColourCode(colour)}
            />
          ))}
        </div>
      </div>
      <div className={styles.button}>
        <button
          disabled={isDisabled}
          style={
            isDisabled
              ? { backgroundColor: "rgba(0, 31, 139, 0.5)" }
              : { backgroundColor: "rgba(0, 31, 139, 1)" }
          }
          type="button"
          onClick={handleClick}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default PopUp;
