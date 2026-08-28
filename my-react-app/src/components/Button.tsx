import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { useNavigate } from "react-router";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isShowIcon?: boolean;
  iconClassName?: string;
  goto?: string;
};

export default function Button({
  children,
  isShowIcon = false,
  className = "",
  iconClassName = "",
  goto,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);

        if (goto && !event.defaultPrevented) {
          navigate(goto);
        }
      }}
      className={`
        group flex items-center justify-center gap-4 rounded-[5px]
        border border-orange-800 bg-orange-800
        font-['Poppins'] capitalize text-white
        transition-colors duration-800 hover:bg-white hover:text-orange-800
        ${className}
      `}
      {...props}
    >
      {children}

      {isShowIcon && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`
            h-5 w-5 -rotate-45 scale-150 transition-transform duration-800
            group-hover:rotate-0 ${iconClassName}
          `}
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )}
    </button>
  );
}