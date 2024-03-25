import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";
import {
  well,
  sections,
  newsletters,
  podcasts,
  columns,
} from "@/data/static/dropdown/lifestyle";
const Lifestyle = () => {
  return (
    <DropdownLayout margin={true}>
      <LinkRow heading="sections" links={sections} />
      <LinkRow heading="columns" links={columns} />
      <LinkRow heading="well" links={well} />
      <LinkWithImageRow
        heading="newsletters"
        links={newsletters}
        redirect={true}
      />
      <LinkWithImageRow heading="podcasts" links={podcasts} redirect={true} />
    </DropdownLayout>
  );
};

export default Lifestyle;
