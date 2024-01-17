interface DropdownLayoutProps {
  margin: boolean;
  children: React.ReactNode[];
}

const DropdownLayout = ({ children, margin }: DropdownLayoutProps) => {
  return (
    <section className={`${margin ? "px-12" : ""} flex justify-between`}>
      {children}
    </section>
  );
};

export default DropdownLayout;
