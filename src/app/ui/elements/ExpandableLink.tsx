import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

interface expandableLinkProps {
  href: string;
  children: React.ReactNode;
}
const ExpandableLink = ({ href, children }: expandableLinkProps) => {
  return (
    <IconContext.Provider value={{ color: "gray", className: "inline" }}>
      <Link
        href={href}
        className="hover:underline hover:underline-offset-2 hover:decoration-2"
      >
        <span className="">{children}</span>
        <span className="pl-1">
          <FaAngleDown />
        </span>
      </Link>
    </IconContext.Provider>
  );
};

export default ExpandableLink;
