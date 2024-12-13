import cx from "classnames";
import { CSSProperties, ReactNode } from "react";

interface Props {
  icon?: string;
  activeIcon?: boolean;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
  children?: ReactNode;
}

const ViIcon = ({ icon = "", size = "md", activeIcon = false }: Props) => {
  return (
    <>
      <div className={cx("ico", "ico" + `-${icon}`, `${size}`, { active: activeIcon })} />
    </>
  );
};

export default ViIcon;
