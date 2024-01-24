import DropdownLayout from "../../utils/layouts/DropdownLayout";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import {
  sections,
  recommendations,
  newsletters,
  podcasts,
} from "@/data/static/dropdown/arts";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";

const Arts = () => {
  return (
    <DropdownLayout margin={true}>
      <LinkRow heading="sections" links={sections} />
      <LinkRow heading="Recommendations" links={recommendations} />
      <LinkWithImageRow
        heading="newsletters"
        links={newsletters}
        redirect={true}
      />
      <LinkWithImageRow heading="podcasts" links={podcasts} redirect={true} />
    </DropdownLayout>
  );
};

export default Arts;
