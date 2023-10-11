import clsx from "clsx";
import Link from "next/link";

import { ButtonHTMLAttributes } from "react";

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({ className, ...props }: UiLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
      )}
    />
  );
}
