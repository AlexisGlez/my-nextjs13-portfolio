"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const StyledLink: React.FunctionComponent<
  React.PropsWithChildren<
    LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
  > & {
    isInverted?: boolean;
  }
> = (props) => {
  const pathname = usePathname();

  const { isInverted, ...rest } = props;

  return (
    <Link {...rest} className={`${props.className} relative group`}>
      {props.children}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === props.href ? "w-full" : "w-0"
        } ${isInverted ? "bg-light dark:bg-dark" : "bg-dark dark:bg-light"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
