export const formatStringToUriPath = (val: string): string => {
  const valLowerCase = val.toLowerCase();
  const filteredValParts = valLowerCase.split(' ').filter((valPart) => valPart !== '-');
  const uriPath = filteredValParts.join('-');

  return uriPath;
};
