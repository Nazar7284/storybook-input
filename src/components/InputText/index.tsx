import React, { HTMLInputTypeAttribute } from "react";
import ICONS from "../../assets/icons";
import InputAnnotation from "../InputAnnotation";
import "./style.css";

export interface InputTextProps {
  sizeInput?: "xs" | "md" | "lg" | "xl";
  placeholder: string;
  rightPosition?: boolean;
  iconBefore?: boolean | React.ReactNode;
  iconTooltip?: boolean;
  iconShortkey?: boolean | React.ReactNode;
  required?: boolean;
  annotationText?: string;
  typeInput?: HTMLInputTypeAttribute;
  disabled?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  sizeInput = "xs",
  placeholder = "",
  rightPosition = true,
  iconBefore = false,
  iconTooltip = false,
  iconShortkey = false,
  required = false,
  annotationText,
  typeInput = "email",
  disabled = false,
}) => {
  return (
    <div>
      <div
        className={`wrapper-input  ${rightPosition ? "" : "left-wrapper"} ${disabled ? "disabled-wrapper" : ""}`}
      >
        {!iconBefore && (
          <img
            className={`${sizeInput}-icon-search`}
            src={ICONS.search}
            alt="search-icon"
          />
        )}
        <input
          className={`${sizeInput}-input input ${rightPosition ? "" : "left-input"} ${disabled ? "disabled" : ""}`}
          type={typeInput}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        {!iconTooltip && (
          <div className="tooltip-container">
            <img
              className={`${sizeInput}-icon-info invalid`}
              src={ICONS.info}
              alt="info-icon"
            />
            <div className="input-tooltip">This is a tooltip</div>
          </div>
        )}
        {!iconShortkey && (
          <div className={`shortkey`}>
            <span className={`${sizeInput}-command-key`}>⌘K</span>
          </div>
        )}
      </div>
      <InputAnnotation text={annotationText} sizeAnnotation={sizeInput} />
    </div>
  );
};

export default InputText;
