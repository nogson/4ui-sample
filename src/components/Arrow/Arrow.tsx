import React from "react";
import up from "../../assets/arrows/p10001_day.svg";
import rightTop from "../../assets/arrows/p10002_day.svg";
import right from "../../assets/arrows/p10003_day.svg";
import leftTop from "../../assets/arrows/p10007_day.svg";
import left from "../../assets/arrows/p10008_day.svg";
import restaurant from "../../assets/restaurant.svg";
import styles from "./styles.module.css";
import { speech } from "../../utils/speech";
import { directionType } from "../../types/types";

interface ArrowProps {
  direction?: directionType;
  //   size?: number;
  //   color?: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  const getArrowPath = () => {
    switch (direction) {
      case "up":
        speech("このまま直進です");
        return up;
      case "rightTop":
        speech("右ななめに曲がります");
        return rightTop;
      case "right":
        speech("右に曲がります");
        return right;
      case "leftTop":
        speech("左ななめに曲がります");
        return leftTop;
      case "left":
        speech("左に曲がります");
        return left;
      case "restaurant":
        speech("近くにおすすめのスポットがあります");
        speech("立ち寄りますか？");
        return restaurant;
      default:
        return up;
    }
  };

  return (
    <div className={`${styles.arrow} ${direction ? styles[direction] : ''}`}>
      <img src={getArrowPath()} alt="Arrow" />
    </div>
  );
};

export default Arrow;
