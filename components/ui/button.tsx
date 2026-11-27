import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "light" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold tracking-[-0.01em] transition-all duration-200 select-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-wine text-ivory hover:bg-deep",
  outline: "border border-deep/20 text-deep hover:border-deep hover:bg-deep hover:text-ivory",
  light: "bg-ivory text-deep hover:bg-gold-soft",
  ghost: "text-wine underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[13px]",
  md: "px-5.5 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return <button className={buttonClasses(variant, size, className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = buttonClasses(variant, size, className);
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
