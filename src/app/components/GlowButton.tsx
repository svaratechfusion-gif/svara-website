import { ReactNode } from "react";
import { Link } from "react-router";

interface GlowButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  glow?: "blue" | "violet" | "gold" | "cyan";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function GlowButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  glow = "blue",
  className = "",
  type = "button"
}: GlowButtonProps) {
  const baseClasses = "px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variantClasses = {
    primary: `bg-gradient-to-r from-[#C0C0C0] to-[#E5E7EB] hover:from-[#D1D5DB] hover:to-[#F3F4F6] text-black ${glow === "blue" ? "hover-glow-blue" : glow === "violet" ? "hover-glow-violet" : ""}`,
    secondary: "glass-strong hover:bg-white/10 text-white",
    outline: `glass border-2 ${glow === "blue" ? "border-[#C0C0C0] hover-glow-blue" : "border-[#E5E7EB] hover-glow-violet"} text-white hover:bg-white/5`
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
