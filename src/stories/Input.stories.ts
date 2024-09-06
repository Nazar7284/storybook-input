import { Meta, StoryObj } from "@storybook/react/*";
import InputGroup from "../components/InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "App/Input",
  component: InputGroup,
  tags: ["autodocs"],
};

export default meta;

export const MediumInput: StoryObj<typeof InputGroup> = {
  args: {
    direction: "row",
    labelText: "Label is",
    labelSize: "xs",
    tooltip: "This is a first tooltip",
    sizeInput: "xs",
    placeholder: "Input...",
    annotationText: "Please enter your email",
    iconBefore: false,
    iconTooltip: false,
    iconShortkey: false,
    typeInput: "email",
    required: false,
  },
};

export const ExtraSmall: StoryObj<typeof InputGroup> = {
  args: {
    ...MediumInput.args,
    labelSize: "xs",
    sizeInput: "xs",
  },
};
