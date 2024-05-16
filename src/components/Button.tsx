import { ReactHTML, ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onclick: () => void;
}

const Button = ({ children, onclick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
