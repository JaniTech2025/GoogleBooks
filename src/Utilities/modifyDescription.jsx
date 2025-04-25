export function modifyDescription(description = "") {
  const fallback = ' '.repeat(50);
  if (!description.trim()) {
    return {
      previewDescription: fallback,
    };
  }

  const sentences = description.match(/[^.!?]+[.!?](?=\s|$)/g) || [];

  let previewDescription = sentences[0] || ''; 
  const previewWordCount = previewDescription.split(/\s+/).length;

  if (previewWordCount > 50) {
    previewDescription = previewDescription.split(/\s+/).slice(0, 50).join(' ');
  }

  const paddedPreview = previewDescription + ' '.repeat(Math.max(0, 50 - previewDescription.length));

  return {
    previewDescription: paddedPreview,
  };
}
