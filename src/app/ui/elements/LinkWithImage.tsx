import Image from "next/image";
import styles from "@/app/ui/styles/linkWithImage.module.scss";
import Link from "next/link";

interface linkWithImageProps {
  title: string;
  href: string;
  src: string;
  desc: string;
}
const LinkWithImage = ({ title, href, src, desc }: linkWithImageProps) => {
  return (
    <Link href={href} className="flex gap-3 py-2">
      <div
        className={`${styles.linkWithImage} self-center relative w-[40px] h-[40px] block`}
      >
        <Image src={src} fill={true} alt={desc} />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="w-[25ch]">{desc}</p>
      </div>
    </Link>
  );
};

export default LinkWithImage;
