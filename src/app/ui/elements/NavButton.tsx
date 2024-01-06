import Link from "next/link";
import { ReactSVGElement } from "react";

interface LinkProps {
  children: React.ReactNode;
  href?: string;
}

function NavButton({ children, href }: LinkProps) {
  const classes = `p-1 rounded hover:bg-background-secondary uppercase py-1 px-2`;
  if (href) {
    return (
      <li className={classes}>
        <Link href={href}>{children}</Link>
      </li>
    );
  }
  return <div className={classes}>{children}</div>;
}

export default NavButton;
