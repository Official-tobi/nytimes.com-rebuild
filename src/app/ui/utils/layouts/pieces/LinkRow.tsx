import Link from "next/link";

interface linkData {
  title: string;
  href: string;
}

interface LinkRowProps {
  heading: string;
  links: linkData[];
}

const LinkRow = ({ heading, links }: LinkRowProps) => {
  const lists = chunkArray(links, 7);
  function chunkArray(array: linkData[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }
  return (
    <div>
      <div className="uppercase py-5 text-background-inverseSecondary">
        {heading}
      </div>
      <div className="flex">
        {lists.map((list, ulIndex) => (
          <ul key={ulIndex} className={`px-${ulIndex && "12"}`}>
            {list.map((link, liIndex) => (
              <li key={liIndex} className=" py-1">
                <Link
                  className="hover:text-background-inverseSecondary"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
export default LinkRow;
