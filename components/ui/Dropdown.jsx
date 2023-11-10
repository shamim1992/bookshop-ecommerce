import { useState } from "react";
import styles from "./../../styles/Dropdown.module.css";
import { AiOutlineDown } from "react-icons/ai";
function Dropdown({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  const selectedValue = options.find((data) => data.id === selected);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown_btn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selectedValue?.name ?? "-Select-"}
        {/* {selected} */}
        {/* <i className="bi bi-chevron-down"></i> */}
        <AiOutlineDown />
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {options?.map((value, index) => (
            <div
              key={value.id}
              onClick={(e) => {
                setSelected(value.id);
                setIsActive(false);
              }}
              className={styles.dropdown_item}
            >
              {value.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
