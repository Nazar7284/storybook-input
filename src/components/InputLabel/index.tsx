import React from "react";
import ICONS from "../../assets/icons";
import "./style.css";

export interface InputLabelProps {
  labelText: string;
  labelSize?: "xs" | "md" | "lg" | "xl";
  tooltip?: string;
  required?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({
  labelText,
  labelSize,
  tooltip,
  required = false,
}) => {
  return (
    <label className={`label-container ${labelSize}`}>
      {labelText}
      {required && <span className="req">*</span>}
      {tooltip && (
        <div className="label-tooltip-container">
          <img className="label-icon-info" src={ICONS.info} alt="info-icon" />
          <div className="label-tooltip">{tooltip ?? "This is a tooltip"}</div>
        </div>
      )}
    </label>
  );
};

export default InputLabel;
