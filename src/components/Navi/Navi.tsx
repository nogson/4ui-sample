import { useEffect, useState } from "react";
import Light from "../Light/Light";
import Arrow from "../Arrow/Arrow";
import styles from "./styles.module.css";
import GUI from "lil-gui";
import scenarioTest from "../../scenarioTest.json";
import { directionType } from "../../types/types";

type NaviProps = {};

const Navi: React.FC<NaviProps> = () => {
  const [direction, setDirection] = useState<directionType>();
  const [interval, setInterval] = useState<number>(5);
  useEffect(() => {
    const gui = new GUI();
    gui
      .add({ direction }, "direction", [
        "up",
        "right",
        "rightTop",
        "left",
        "leftTop",
        "restaurant",
      ])
      .onChange((value: directionType) => {
        setDirection(value);
      });

    gui.add({ interval }, "interval", 5, 100, 5).onChange((value: number) => {
      setInterval(value);
    });

    scenarioTest.steps.forEach(({ direction }, index: number) => {
      setTimeout(() => {
        setDirection(direction as directionType);
      }, (index + 1) * interval * 1000);
    });

    return () => {
      gui.destroy();
    };
  }, [direction, interval]);

  return (
    <div className={styles.navi}>
      <Light direction={direction} />
      <Arrow direction={direction} />
    </div>
  );
};

export default Navi;
