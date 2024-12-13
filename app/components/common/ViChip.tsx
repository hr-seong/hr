import cx from "classnames";
import { CSSProperties, ReactNode } from "react";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "rect" | "round";
  outline?: boolean;
  label?: string;
  bgColor?: string;
  borderColor?: string;
  fontColor?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const ViChip = ({ className = "", type = "rect", size = "md", outline, label, bgColor, borderColor, fontColor }: Props) => {
  return (
    <>
      <div className={cx("vi-chip", `${className}`, { round: type == "round" }, { rect: type == "rect" }, `${size}`, { outline: outline })} style={{ backgroundColor: bgColor, borderColor: borderColor }}>
        <div className="txt" style={{ color: fontColor }}>
          {label}
        </div>
      </div>
    </>
  );
};

export default ViChip;
