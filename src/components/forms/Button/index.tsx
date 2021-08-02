import React from "react";
import { FormButton } from "./styles";

type ButtonProps = {
  onClick?: () => void;
  children: string;
  width?: keyof typeof widths;
  color?: "default" | "orange";
  className?: string;
};

const widths = {
  regular: "220px",
  small: "160px",
  xsmall: "100px",
};

const Button = ({
  onClick,
  children,
  width = "regular",
  color = "default",
  ...props
}: ButtonProps) => {
  return (
    <FormButton
      className={props.className}
      variant={color}
      width={widths[width]}
      onClick={onClick}
    >
      <span>{children}</span>
    </FormButton>
  );
};

export default Button;
