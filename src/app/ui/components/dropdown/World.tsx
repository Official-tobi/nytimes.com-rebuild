import {
  sections,
  topStories,
  newsletters,
  podcasts,
} from "@/data/static/dropdown/world";
import DropdownLayout from "../../utils/layouts/DropdownLayout";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";

const World = () => {
  return (
    <DropdownLayout margin={true}>
      <LinkRow heading="sections" links={sections} />
      <LinkRow heading="Top stories" links={topStories} />
      <LinkWithImageRow
        links={newsletters}
        redirect={false}
        heading="newsletters"
      />
      <LinkWithImageRow links={podcasts} redirect={false} heading="podcasts" />
    </DropdownLayout>
  );
};

export default World;
