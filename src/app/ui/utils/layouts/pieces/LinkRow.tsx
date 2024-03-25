import Link from "next/link";
import { linkData } from "@/types/types";

interface LinkRowProps {
  heading: string;
  links: linkData[];
  redirect?: boolean;
}

const LinkRow = ({ heading, links, redirect }: LinkRowProps) => {
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
      <div className="flex gap-5">
        {lists.map((list, ulIndex) => (
          <ul key={ulIndex}>
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
      {redirect ? (
        <div className="pt-3 text-center">
          <Link
            href={"/"}
            className=" text-background-inverseSecondary hover:underline"
          >
            See all {heading}
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default LinkRow;
