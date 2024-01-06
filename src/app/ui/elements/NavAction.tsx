import Link from "next/link";
interface navActionProps {
  children: React.ReactNode;
  href: string;
}
function NavAction({ children, href }: navActionProps) {
  return (
    <Link
      className="font-bold text-white px-3 py-2 bg-action-primary rounded-sm border border-solid border-action-secondary uppercase"
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavAction;
