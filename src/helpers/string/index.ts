export const truncateString = (txt: string, maxChar: number = 60): string => {
  return txt.length > maxChar ? txt.substring(0, maxChar).concat("...") : txt;
};
