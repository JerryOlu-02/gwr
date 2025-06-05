// DAILY ACTIVITIES IMAGES
import ScottImg from "../assets/images/scott-playing.jpg";
import PeopleWatching from "../assets/images/people-watching.png";
import DjSet from "../assets/images/dj-set.png";
import PoolPlayers from "../assets/images/pool-players.png";
import ScottImgClear from "../assets/images/scott-playing-clear.png";
import PeopleWatchingClear from "../assets/images/people-watching-clear.png";
import DjSetClear from "../assets/images/dj-set-clear.png";
import PoolPlayersClear from "../assets/images/pool-players-clear.png";

// GUEST IMAGES
import Donjazzy from "../assets/images/guests/don-jazzy.png";
import PrettyMike from "../assets/images/guests/pretty-mike.png";
import Ekemeni from "../assets/images/guests/ekemeni.png";
import Harrysong from "../assets/images/guests/harry-song.png";
import Orezi from "../assets/images/guests/orezi.png";
import Chidi from "../assets/images/guests/chidi.png";
import Richard from "../assets/images/guests/richard.png";
import Roby from "../assets/images/guests/roby.png";
import DonjazzyPlaceholder from "../assets/images/guests/don-jazzy-placeholder.png";
import PrettyMikePlaceholder from "../assets/images/guests/pretty-mike-placeholder.png";
import EkemeniPlaceholder from "../assets/images/guests/ekemeni-placeholder.png";
import HarrysongPlaceholder from "../assets/images/guests/harry-song-placeholder.png";
import OreziPlaceholder from "../assets/images/guests/orezi-placeholder.png";
import ChidiPlaceholder from "../assets/images/guests/chidi-placeholder.png";
import RichardPlaceholder from "../assets/images/guests/richard-placeholder.png";
import RobyPlaceholder from "../assets/images/guests/roby-placeholder.png";

// PRODUCT IMAGES
import ProductOne from "../assets/images/product-1.png";
import ProductTwo from "../assets/images/product-2.png";
import ProductThree from "../assets/images/product-3.png";
import ProductOneClear from "../assets/images/product-1-clear.png";
import ProductTwoClear from "../assets/images/product-2-clear.png";
import ProductThreeClear from "../assets/images/product-3-clear.png";

export const ACTIVITIES = [
  {
    image: ScottImg,
    imageClear: ScottImgClear,
    title: "Guinness World Record Attempt",
    description:
      "Watch history unfold live as Nigeria enters the global spotlight.",
  },
  {
    image: PoolPlayers,
    imageClear: PoolPlayersClear,
    title: "8-Ball Competition",
    description:
      "The largest 8-Ball Pool tournament in Nigerian history where attendees can register, play, and compete for fun and prizes while the record attempt is underway.",
  },
  {
    image: DjSet,
    imageClear: DjSetClear,
    title: "Live Entertainment",
    description: "Top DJs, music performances, and electric vibes all day.",
  },
  {
    image: PeopleWatching,
    imageClear: PeopleWatchingClear,
    title: "Influencer Coverage & Livestream",
    description:
      "Get seen by thousands via TikTok, Instagram, YouTube & media.",
  },
];

export const GUESTS = [
  {
    image: Donjazzy,
    imagePlaceholder: DonjazzyPlaceholder,
    title: "don jazzy",
    description: "Music executive and record producer",
  },
  {
    image: PrettyMike,
    imagePlaceholder: PrettyMikePlaceholder,
    title: "Pretty Mike",
    description: "Socialite and Entrepreneur",
  },
  {
    image: Ekemeni,
    imagePlaceholder: EkemeniPlaceholder,
    title: "Ekemini Ekerette",
    description: "Fitness Consultant",
  },
  {
    image: Harrysong,
    imagePlaceholder: HarrysongPlaceholder,
    title: "Harrysong",
    description: "Singer and Songwriter",
  },
  {
    image: Orezi,
    imagePlaceholder: OreziPlaceholder,
    title: "Orezi",
    description: "Nigerian Musician ",
  },
  {
    image: Chidi,
    imagePlaceholder: ChidiPlaceholder,
    title: "Chidi Mokeme",
    description: "Nigerian Actor and Reality Show Host",
  },
  {
    image: Richard,
    imagePlaceholder: RichardPlaceholder,
    title: "Richard Nnadi",
    description: "CEO, Eve After Dark (Duke of Spades)",
  },
  {
    image: Roby,
    imagePlaceholder: RobyPlaceholder,
    title: "Roby ekpo",
    description: "MC / Host",
  },
];

export const PRODUCTS = [
  {
    image: ProductOne,
    clearImage: ProductOneClear,
    title: "Spirit of 1960 Jacket (Unisex - Green)",
    price: "₦100,000.00",
  },
  {
    image: ProductTwo,
    clearImage: ProductTwoClear,
    title: "True Patriot Classic T-Shirt (Unisex White)",
    price: "₦50,000.00",
  },
  {
    image: ProductThree,
    clearImage: ProductThreeClear,
    title: "True Patriot Polo",
    price: "₦60,000.00",
  },
];

export const FAQS = [
  {
    question: "When and where is the event taking place?",
    answer:
      "The event will be held at Silverbird Galleria, Victoria Island, Lagos, from July 15th to July 20th, 2025.",
  },
  {
    question: "Is the event open to the public?",
    answer: `Viewing of the Guinness World Record Attempt is open to the public. Attendees can enjoy live entertainment, games, giveaways, and more. Spots are limited, so click here to sign up for a free spot`,
    link: true,
    textBefore:
      "Viewing of the Guinness World Record Attempt is open to the public. Attendees can enjoy live entertainment, games, giveaways, and more. Spots are limited, so",
    textAfter: " to sign up for a free spot",
  },
  {
    question: "What is the Guinness World Record being attempted?",
    answer:
      "25-hour non-stop game of pool by Scott Igbene, aiming to set a new world record for the longest pool-playing session.",
  },
  {
    question: "What is the 8-Ball Competition and how do I join?",
    answer: `Click here`,
    link: true,
    textBefore:
      "The 8-Ball Competition is the largest of it’s kind in Nigerian history where contestants would compete for a grand price. ",
    textAfter: " to register for the competition.",
  },
  {
    question: "Will there be livestreaming of the event?",
    answer:
      "Yes! The entire event will be livestreamed and covered across TikTok, Instagram, YouTube, and media platforms.",
  },
  {
    question: "Who are the special guests?",
    answer:
      "Expect to see celebrities, influencers, athletes, and sports officials at the event.",
  },
  {
    question: "How can my brand become a sponsor?",
    answer: `Click here`,
    link: true,
    textBefore: "Interested in becoming a sponsor? ",
    textAfter: " to contact us for partnership opportunities.",
  },
];
