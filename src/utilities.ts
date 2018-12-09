export const parseIndex = (hash: string): number => {
  const match = hash.match(/^#([0-9]+)/);
  let index = 0;
  if (match) {
    index = parseInt(match[1], 10)
  }
  return index
};
