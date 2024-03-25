import DropdownLayout from "../../utils/layouts/Dropdown";
import LinkRow from "../../utils/layouts/pieces/LinkRow";
import LinkWithImageRow from "../../utils/layouts/pieces/LinkWithImageRow";
import Title from "../../utils/layouts/pieces/Title";
import { newsletters, listen, featured } from "@/data/static/dropdown/audio";

const Audio = () => {
  return (
    <DropdownLayout margin={true} subscription="Audio">
      <Title
        title="Audio"
        subtitle="Podcasts and narrated articles covering news, tech, culture and more."
        link="Download the Audio app on iOS"
      />
      <LinkRow heading="listen" links={listen} redirect={true} />
      <LinkWithImageRow heading="featured" links={featured} />
      <LinkWithImageRow
        heading="newsletters"
        redirect={true}
        links={newsletters}
      />
    </DropdownLayout>
  );
};

export default Audio;
