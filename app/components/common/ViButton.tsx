import cx from "classnames";
import React, { CSSProperties, ReactNode, MouseEvent } from "react";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "round" | "rect" | "icon";
  outline?: boolean;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  cover?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
  style?: CSSProperties;
  padding?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}
const ViButton = ({ className = "", type = "round", size = "md", outline, label, bgColor, borderColor, borderRadius, fontColor, cover = false, width, height, iconLeft = false, iconRight = false, padding, disabled = false, onClick, children }: Props) => {
  return (
    <>
      <button type="button" className={cx("vi-btn", `${className}`, `${size}`, { round: type == "round" }, { rect: type == "rect" }, { "icon-only": type == "icon" }, { outline: outline })} disabled={disabled} style={{ backgroundColor: bgColor, borderColor: borderColor, padding: padding }} onClick={onClick}>
        {type == "icon" ? (
          <>
            {cover ? (
              <div className="vi-btn-content">
                <div className={cx("cover", { outline: outline })} style={{ width: width, height: height, background: bgColor, borderRadius: borderRadius, borderColor: borderColor }}>
                  {children}
                </div>
              </div>
            ) : (
              <div className="vi-btn-content">{children}</div>
            )}
          </>
        ) : (
          <div className="vi-btn-content">
            {iconLeft && <>{children}</>}
            <div className="txt" style={{ color: fontColor }}>
              {label}
            </div>
            {iconRight && <>{children}</>}
          </div>
        )}
      </button>
    </>
  );
};

export default ViButton;
