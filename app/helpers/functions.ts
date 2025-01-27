import { Dimensions } from "react-native";
import { Community, HashTags, Nomads } from "./interfaces";
const { height, width } = Dimensions.get("window")
export const generateNomadsList = (count: number): Nomads[] => {
  return Array.from({ length: count }).map((_, index) => ({
    image: `https://picsum.photos/100/100`,
    name: generateRandomAccountName(),
    followerCount: Math.floor(Math.random() * 100) + 1, // Random followers between 1 and 10,000
  }));
};

export const generateRandomAccountName = () => {
  const prefixes = [
    "m", "play", "dark", "sky", "light", "shadow", "happy", "fast", "cool", "blue",
    "red", "green", "silver", "golden", "fire", "wild", "chill", "free", "swift"
  ];

  const suffixes = [
    "hogan", "parker", "smith", "hunter", "wolf", "storm", "fox", "spark", "dash",
    "hawk", "flame", "rider", "king", "shadow", "path", "river", "blade", "jones"
  ];

  // Pick a random prefix and suffix
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  // Combine and return with an "@" symbol
  return `@${prefix}${suffix}`;
}


export const generateCommunityList = (count: number): Community[] => {
  return Array.from({ length: count }).map((_, index) => ({
    image: `https://picsum.photos/100/100?blur=1`,
    postCount: Number(Math.floor(Math.random() * 100) + 1),
    firstHeading: getFirstHeading(),
    secondHeading: getSecondHeading(),
  }));
};


export const generateHashTagList = (count: number): HashTags[] => {
  return Array.from({ length: count }).map((_, index) => ({
    image: `https://picsum.photos/100/100`,
    type: getRandomNatureHashtag(),
    count: Number(Math.floor(Math.random() * 100) + 1),
  }));
};

export const getRandomNatureHashtag = () => {
  const hashtags = [
    "#Explore",
    "#Wanderlust",
    "#Adventure",
    "#Nature",
    "#Mountain",
    "#Forest",
    "#Travel",
    "#Scenic",
    "#Hiking",
    "#OceanDreams",
    "#WildAndFree",
    "#Camp",
    "#Healing",
  ];

  // Return a single random hashtag
  return hashtags[Math.floor(Math.random() * hashtags.length)];
}

export const getFirstHeading = () => {
  const string = [
    "Places of",
    "We Live in"
  ]
  return string[Math.floor(Math.random() * string.length)];
}

export const getSecondHeading = () => {
  const string = [
    "France",
    "Italy",
    "Germany",
    "Spain",
    "Russia",
    "India",
    "US",
    "UK",
    "Canada",
  ]
  return string[Math.floor(Math.random() * string.length)];
}

export const getHomePageData = (count: number) => {
  return Array.from({ length: count }).map((_, index) => ({
    image: `https://picsum.photos/${width}/${height - 400}?random=2`,
    caption: getRandomCaptionAndHashtags(),
  }));
}

export const getRandomCaptionAndHashtags = () => {
  const captions = [
    "Nature is not a place to visit. It is home.",
    "Adventure is out there—go find it!",
    "Let the mountains speak and the rivers run.",
    "Breathe in the wild air.",
    "Lost in the right direction.",
    "Every sunset is an opportunity to reset.",
    "The earth has music for those who listen.",
    "Collecting moments, not things.",
    "Keep close to nature’s heart.",
    "Life begins at the end of your comfort zone."
  ];

  const hashtags = [
    "#ExploreNature",
    "#Wanderlust",
    "#AdventureAwaits",
    "#NatureLovers",
    "#IntoTheWild",
    "#MountainVibes",
    "#ForestTherapy",
    "#TravelMore",
    "#ScenicViews",
    "#HikingLife",
    "#OceanDreams",
    "#WildAndFree",
    "#CampVibes",
    "#NatureHealing",
    "#EcoAdventure"
  ];

  // Select a random caption
  const randomCaption = captions[Math.floor(Math.random() * captions.length)];

  // Select two unique random hashtags
  const randomHashtags = hashtags
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 2); // Take the first 2

  // Return caption and hashtags as a formatted string
  return `${randomCaption}\n${randomHashtags.join(" ")}`;
}