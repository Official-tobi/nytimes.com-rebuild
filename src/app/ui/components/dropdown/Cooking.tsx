import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";
import Title from "../../utils/layouts/pieces/Title";
import {
  recipes,
  editorsPick,
  newsletter_one,
  newsletter_two,
} from "@/data/static/dropdown/cooking";

const Cooking = () => {
  return (
    <DropdownLayout margin={true} subscription="Cooking">
      <Title
        title="Cooking"
        subtitle="Recipes,advice and inspiration for everyday cooking, special occassions and more."
      />
      <LinkRow heading="recipes" links={recipes} />
      <LinkRow heading="Editors' Picks" links={editorsPick} />
      <LinkWithImageRow heading="newsletters" links={newsletter_one} />
      <LinkWithImageRow heading="hi" links={newsletter_two} redirect={true} />
    </DropdownLayout>
  );
};

export default Cooking;
