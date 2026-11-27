import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            dark ? "text-gold-soft" : "text-wine/80"
          )}
        >
          <span aria-hidden="true" className={cn("h-1.5 w-1.5", dark ? "bg-gold" : "bg-gold")} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-[3rem]",
          dark ? "text-ivory" : "text-deep"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-[15px] leading-relaxed sm:text-base", dark ? "text-ivory/75" : "text-ink/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
