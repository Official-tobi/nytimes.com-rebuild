import {
  usPolitics,
  sectionsrow1,
  sectionsrow2,
  newsletters,
  podcasts,
  topStories,
} from "@/data/static/dropdown/us";
import Link from "next/link";
import LinkWithImage from "../../elements/LinkWithImage";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const US = () => {
  return (
    <section className={`${roboto.className} text-[12px] flex justify-between`}>
      <div>
        <div className="uppercase py-5 text-background-inverseSecondary">
          sections
        </div>
        <div className="flex ">
          <ul>
            {sectionsrow1.map((section, index) => {
              return (
                <li key={index} className=" py-1">
                  <Link
                    className="hover:text-background-inverseSecondary"
                    href={section.href}
                  >
                    {section.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="pl-12">
            {sectionsrow2.map((section, index) => (
              <li key={index} className="py-1">
                <Link
                  className="hover:text-background-inverseSecondary"
                  href={section.href}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div className="uppercase py-5 text-background-inverseSecondary">
          U.S. Politics
        </div>
        <div>
          <ul>
            {usPolitics.map((link, index) => {
              return (
                <li key={index} className=" py-1">
                  <Link
                    className="hover:text-background-inverseSecondary"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className="uppercase py-5 text-background-inverseSecondary">
          Top Stories
        </div>
        <div>
          <ul>
            {topStories.map((story, index) => {
              return (
                <li key={index} className=" py-1">
                  <Link
                    className="hover:text-background-inverseSecondary"
                    href={story.href}
                  >
                    {story.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className="uppercase py-5 text-background-inverseSecondary">
          Newsletters
        </div>
        <div>
          <ul>
            {newsletters.map((newsletter, index) => {
              return (
                <li key={index}>
                  <LinkWithImage
                    title={newsletter.title}
                    href={newsletter.href}
                    src={newsletter.src}
                    desc={newsletter.desc}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-3 text-center">
          <Link
            href={"/"}
            className=" text-background-inverseSecondary hover:underline"
          >
            See all newsletters
          </Link>
        </div>
      </div>
      <div>
        <div className="uppercase py-5 text-background-inverseSecondary">
          Podcasts
        </div>
        <div>
          <ul>
            {podcasts.map((podcast, index) => (
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
        <div className="pt-3 text-center">
          <Link
            href={"/"}
            className=" text-background-inverseSecondary hover:underline"
          >
            See all podcasts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default US;
