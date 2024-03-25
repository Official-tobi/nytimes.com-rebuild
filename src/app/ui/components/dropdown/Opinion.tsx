import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";
import {
  sections,
  columnists,
  topics,
  podcasts,
} from "@/data/static/dropdown/opinion";

const Opinion = () => {
  return (
    <DropdownLayout margin={true}>
      <LinkRow heading="sections" links={sections} />
      <LinkRow heading="topics" links={topics} />
      <LinkRow heading="columnists" links={columnists} />
      <LinkWithImageRow heading="podcasts" links={podcasts} redirect={true} />
    </DropdownLayout>
  );
};

export default Opinion;
