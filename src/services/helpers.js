export function convertTitleToId(title) {
  return title
    .toLowerCase()
    .match(/[a-z0-9\s-]+/g)
    .map((x) => x.trim().split(/\s+/).join("-"))
    .join("-")
    .replace(/-and\b/g, "");
}
