import "./Button.css";

type ButtonProps = {
  title: String;
};

export const Button = ({ title }: ButtonProps) => (
  <button className="button-container">{title}</button>
);
