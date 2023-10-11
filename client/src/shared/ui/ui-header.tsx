import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <UiLogo />
      {right}
    </header>
  );
}
