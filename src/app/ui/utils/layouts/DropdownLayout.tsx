interface DropdownLayoutProps {
  margin: boolean;
  children: React.ReactNode[];
}

const DropdownLayout = ({ children, margin }: DropdownLayoutProps) => {
  return (
    <div className={`${margin ? "px-12" : ""} flex justify-between`}>
      {children}
    </div>
  );
};

export default DropdownLayout;
