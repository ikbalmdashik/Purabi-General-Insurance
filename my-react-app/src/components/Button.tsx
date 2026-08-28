import { Link } from "react-router/internal/react-server-client";

type ButtonProps = {
  text: string;
  isShowIcon?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

export default function Button({
  text,
  isShowIcon = false,
  href = "#",
  onClick,
  className = "",
  iconClassName = "",
}: ButtonProps) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`
        group flex items-center justify-center gap-4 rounded-[5px]
        border border-orange-800 bg-orange-800
        font-['Poppins'] capitalize text-white
        transition-colors duration-200 hover:bg-white hover:text-orange-800
        ${className}
      `}
    >
      <span>{text}</span>

      {isShowIcon && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`
            h-5 w-5 -rotate-45 transition-transform duration-200 scale-150
            group-hover:rotate-0 ${iconClassName}
          `}
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )}
    </Link>
  );
}