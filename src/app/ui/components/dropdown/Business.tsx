import {
  sections,
  topStories,
  newsletters,
  podcasts,
} from "@/data/static/dropdown/business";
import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";

const Business = () => {
  return (
    <DropdownLayout margin={true}>
      <LinkRow heading="section" links={sections} />
      <LinkRow heading="Top Stories" links={topStories} />
      <LinkWithImageRow
        heading="newsletters"
        links={newsletters}
        redirect={true}
      />
      <LinkWithImageRow heading="podcasts" links={podcasts} redirect={true} />
    </DropdownLayout>
  );
};

export default Business;
