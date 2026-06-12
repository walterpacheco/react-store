import "./Button.css";
import { buttonData } from "./Button.data";

function Button({
  label = buttonData.defaultLabel,
  variant = "primary",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      className={`custom-button custom-button--${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;