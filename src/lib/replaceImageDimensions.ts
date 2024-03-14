export const replaceImageDimensions = (inputString: string): string => {
  const replacedString = inputString.replace(/\b64x64\b/g, "128x128");
  return replacedString;
};
