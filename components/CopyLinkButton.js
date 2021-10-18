import { useEffect, useState } from "react";
import style from "../styles/CopyLinkButton.module.css";
import { Button } from "./Button";

export const CopyLinkButton = () => {
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(2);

  useEffect(() => {
    if (active) {
      const id = setInterval(() => {
        setTimer((t) => {
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
    <Button
      text={active ? "Link copied!" : "Copy Link"}
      onClick={handleClick}
      className={active ? style.active : style.inactive}
    />
  );
};
