import { useState } from "react";
import style from "../styles/CopyLinkButton.module.css";

const CopyLinkButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  return (
    <button
      className={style.button + ` ${active ? style.active : ""}`}
      onClick={handleClick}
    >
      {active ? "Link copied!" : "Copy Link"}
    </button>
  );
};

export default CopyLinkButton;
