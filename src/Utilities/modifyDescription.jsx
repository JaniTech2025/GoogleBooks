export function modifyDescription(description = "") {

  if (!description) {
    return { description };
  }

  const words = description.split(/\s+/);

  const previewWords = words.slice(0, 15).join(' ');

  const previewDescription = words.length > 15 ? previewWords + '...' : previewWords;

  // console.log(description);
  // const shortDescription = words.slice(0, 3).join(' ');

  return { previewDescription };
}
