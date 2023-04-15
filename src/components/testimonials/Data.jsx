import { TwitterTweetEmbed } from "react-twitter-embed";
import linkedIn from "../../assets/iconmonstr-linkedin-3.svg";

import Hackatonat from "../../assets/logo-icon.svg";
export const Data = [
  {
    id: 1,
    image: Hackatonat,
    title: "Student Club Hackathon",
    description: "Won the fist place in the Hackathon ",
    tweet: <TwitterTweetEmbed tweetId={"1646611900875128839"} />,
  },
  {
    id: 2,
    image: linkedIn,
    title: "Computer Club",
    description: "First Computer Club Activity ",
    tweet: (
      <a href="https://www.linkedin.com/posts/muath-al-ghamdi_team-management-events-activity-7047157129266216962-JHl_?utm_source=share&utm_medium=member_desktop">
        Link to Post on LinkedIn
      </a>
    ),
  },
];
