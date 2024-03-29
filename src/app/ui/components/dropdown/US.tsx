import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import {
  sections,
  usPolitics,
  newsletters,
  podcasts,
  topStories,
} from "@/data/static/dropdown/us";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";

const US = () => {
  return (
    <DropdownLayout>
      <LinkRow heading="sections" links={sections} />
      <LinkRow heading="U.S. Politics" links={usPolitics} />
      <LinkRow heading="Top stories" links={topStories} />
      <LinkWithImageRow
        heading="newsletters"
        links={newsletters}
        redirect={true}
      />
      <LinkWithImageRow heading="podcasts" links={podcasts} redirect={true} />
    </DropdownLayout>
  );
};

export default US;
