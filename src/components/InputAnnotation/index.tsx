import "./style.css";

interface InputAnnotationProps {
  text?: string;
  sizeAnnotation: "xs" | "md" | "lg" | "xl";
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({
  text,
  sizeAnnotation,
}) => {
  return (
    <p className={`${sizeAnnotation}-annotation`}>{text ?? "Please enter"}</p>
  );
};

export default InputAnnotation;
