let words = [
  "GOODNESS",
  "SINCERITY",
  "EMPATHY",
  "LOVE",
  "PATIENCE",
  "GRATITUDE",
  "MODESTY",
  "FORGIVENESS",
  "RESPONSIBILITY",
  "SOLIDARITY",
];

export const getRandomWords = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};
