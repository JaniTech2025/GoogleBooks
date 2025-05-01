export function modifyDescription(description = "") {
  if (!description) {
    return { description };
  }

  const words = description.split(/\s+/);

  const previewWords = words.slice(0, 15).join(" ");

  const previewDescription =
    words.length > 15 ? previewWords + "..." : previewWords;

  return { previewDescription };
}
