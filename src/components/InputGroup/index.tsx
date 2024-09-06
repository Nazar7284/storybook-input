import React from "react";
import "./style.css";
import InputLabel, { InputLabelProps } from "../InputLabel";
import InputText, { InputTextProps } from "../InputText";

interface InputGroupProps {
  direction?: "row" | "col";
}

type InputGroupUnionProps = InputLabelProps & InputTextProps & InputGroupProps;

const InputGroup: React.FC<InputGroupUnionProps> = ({
  direction = "col",
  labelText,
  labelSize = "md",
  tooltip,
  ...inputProps
}) => {
  return (
    <div>
      <div className={`${direction}`}>
        <InputLabel
          labelText={labelText}
          labelSize={labelSize}
          tooltip={tooltip}
        />
        <InputText {...inputProps} />
      </div>
    </div>
  );
};

export default InputGroup;
