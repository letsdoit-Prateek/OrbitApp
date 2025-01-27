import { Community, HashTags, Nomads } from "./interfaces";

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
    image: `https://picsum.photos/100/100`,
    postCount: Number(Math.floor(Math.random() * 100) + 1),
    firstHeading: generateRandomAccountName(),
    secondHeading: generateRandomAccountName(),
  }));
};


export const generateHashTagList = (count: number): HashTags[] => {
  return Array.from({ length: count }).map((_, index) => ({
    image: `https://picsum.photos/seed/100/100`,
    type: generateRandomAccountName(),
    count: Number(Math.floor(Math.random() * 100) + 1),
  }));
};