import { Titan_One } from "next/font/google";
import Link from "next/link";

const titanOne = Titan_One({ subsets: ["latin"], weight: ["400"] });
interface TitleProps {
  title: string;
  subtitle: string;
  link?: string;
}

const Title = ({ title, subtitle, link }: TitleProps) => {
  return (
    <div className="py-5">
      <div className={`font-bold pb-4 text-2xl ${titanOne.className}`}>
        {title}
      </div>
      <div className="pb-5 w-[30ch] text-smiv">{subtitle}</div>
      <div className=" hover:text-background-inverseSecondary">
        {link ? <Link href={"/"}>{link}</Link> : <p></p>}
      </div>
    </div>
  );
};

export default Title;
