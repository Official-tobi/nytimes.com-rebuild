import LinkWithImage from "@/app/ui/elements/LinkWithImage";
import Link from "next/link";
interface linkData {
  title: string;
  href: string;
}
interface linkWithImageData extends linkData {
  src: string;
  desc: string;
}
interface LinkWithImageRowProps {
  heading: string;
  links: linkWithImageData[];
  redirect: boolean;
}

const LinkWithImageRow = ({
  heading,
  links,
  redirect,
}: LinkWithImageRowProps) => {
  return (
    <div>
      <div className="uppercase py-5 text-background-inverseSecondary">
        {heading}
      </div>
      <div>
        <ul>
          {links.map((podcast, index) => (
            <li key={index}>
              <LinkWithImage
                title={podcast.title}
                href={podcast.href}
                src={podcast.src}
                desc={podcast.desc}
              />
            </li>
          ))}
        </ul>
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

export default LinkWithImageRow;
