export function getCurrentSlide(location) {
  const query = location ? location.query : {}
  const slide = query.slide ? Number(query.slide) : 0
  return slide === slide ? slide : 0 // eslint-disable-line no-self-compare
}
