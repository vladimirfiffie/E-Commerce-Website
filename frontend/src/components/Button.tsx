type ButtonVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
