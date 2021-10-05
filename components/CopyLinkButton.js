import { useEffect, useState } from "react";
import style from "../styles/CopyLinkButton.module.css";

const CopyLinkButton = () => {
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(2);

  useEffect(() => {
    if (active) {
      const id = setInterval(() => {
        setTimer((t) => {
          console.log(t);
          if (t < 1) {
            setActive(false);
          } else {
            return t - 1;
          }
        });
      }, 1000);

      return () => clearInterval(id);
    }
  }, [active]);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);

    setActive(true);
    setTimer(2);
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
