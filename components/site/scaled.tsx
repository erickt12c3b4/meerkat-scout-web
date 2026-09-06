import type { CSSProperties, ReactNode } from "react";

/**
 * Fixed-size illustrated composition (absolute-positioned cards, windows, mascots) that
 * scales down as one unit when its column is narrower than the design width.
 * At the design width (and above) the scale is exactly 1, so desktop stays pixel-matched.
 *
 * Pure CSS: the wrapper is an inline-size container; the ratio 100cqw / width is derived
 * with tan(atan2()) (supported in all evergreen browsers since 2023). Height is reserved
 * with aspect-ratio so surrounding layout does not jump.
 *
 * `flow` (optional): below 1024px the box stops scaling and lets its children flow
 * normally — used for simple "one card + mascot" heroes where a scaled-down card would be
 * unreadable. Children then need their own `max-lg:static` overrides.
 */
export function Scaled({
  width,
  height,
  className,
  children,
  align = "center",
  flow = false,
  ...rest
}: {
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
  align?: "left" | "center";
  flow?: boolean;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  const wrapper: CSSProperties = {
    containerType: "inline-size",
    maxWidth: width,
    aspectRatio: `${width} / ${height}`,
    marginInline: align === "center" ? "auto" : undefined,
  };
  const inner: CSSProperties = {
    width,
    height,
    transform: `scale(min(1, tan(atan2(100cqw, ${width}px))))`,
  };
  return (
    <div
      className={
        "relative w-full " +
        (flow ? "max-lg:[aspect-ratio:auto] max-lg:[container-type:normal] max-lg:max-w-none " : "") +
        (className ?? "")
      }
      style={wrapper}
      {...rest}
    >
      <div
        className={
          "absolute top-0 left-0 origin-top-left " +
          (flow ? "max-lg:static max-lg:h-auto max-lg:w-auto max-lg:transform-none" : "")
        }
        style={inner}
      >
        {children}
      </div>
    </div>
  );
}
