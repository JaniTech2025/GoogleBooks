export function modifyDescription(description = "") {

  if (!description) {
    return { description };
  }

  const words = description.split(/\s+/);

  const previewWords = words.slice(0, 30).join(' ');

  const previewDescription = words.length > 30 ? previewWords + '...' : previewWords;

  return { previewDescription };
}
