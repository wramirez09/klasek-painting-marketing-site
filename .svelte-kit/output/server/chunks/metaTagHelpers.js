function createTitleDescription(title, description) {
  return Object.freeze({
    title,
    description,
    titleTemplate: "%s | Cook County Painters",
    openGraph: {
      title,
      description
    }
  });
}
function createCityMetaTags(title, description) {
  return Object.freeze({
    titleTemplate: "%s",
    title,
    description,
    openGraph: {
      title,
      description
    }
  });
}
export {
  createCityMetaTags as a,
  createTitleDescription as c
};
