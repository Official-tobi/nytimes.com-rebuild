import Link from "next/link";

interface DropdownLayoutProps {
  margin?: boolean;
  children: React.ReactNode[];
  subscription?: string;
}

const DropdownLayout = ({
  children,
  margin,
  subscription,
}: DropdownLayoutProps) => {
  return (
    <div>
      <div className={`${margin ? "px-12" : ""} flex justify-between`}>
        {children}
      </div>
      <div className="py-5">
        {subscription ? (
          <div className="text-smiv flex justify-center gap-1 py-5 border-t border-solid border-t-background-quaternary">
            <p>{subscription} is included in an All Access subscription.</p>
            <p className="font-bold">
              <Link href={"/"}>Learn more</Link>
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default DropdownLayout;
