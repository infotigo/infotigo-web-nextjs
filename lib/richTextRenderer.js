import { BlocksRenderer } from "@strapi/blocks-react-renderer";

/**
 * Utility functions to render Strapi rich text content using official BlocksRenderer
 */

// Re-export BlocksRenderer for convenience
export { BlocksRenderer };

/**
 * Render rich text blocks from Strapi using BlocksRenderer
 * @param {Array} blocks - Array of rich text blocks
 * @returns {JSX.Element} - Rendered content
 */
export function renderRichText(blocks) {
  if (!blocks || !Array.isArray(blocks)) return null;

  // Find the rich text block and render its body
  const richTextBlock = blocks.find(
    (block) => block.__component === "shared.rich-text"
  );

  if (!richTextBlock || !richTextBlock.body) return null;

  return <BlocksRenderer content={richTextBlock.body} />;
}

/**
 * Extract plain text from rich text blocks (for excerpts)
 * @param {Array} blocks - Array of rich text blocks
 * @param {number} maxLength - Maximum length of excerpt
 * @returns {string} - Plain text excerpt
 */
export function extractTextFromBlocks(blocks, maxLength = 150) {
  if (!blocks || !Array.isArray(blocks)) return "";

  let text = "";

  for (const block of blocks) {
    if (block.__component === "shared.rich-text" && block.body) {
      for (const element of block.body) {
        if (element.type === "paragraph" && element.children) {
          for (const child of element.children) {
            if (child.type === "text") {
              text += child.text + " ";
            }
          }
        }
      }
    }
  }

  text = text.trim();

  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + "...";
  }

  return text;
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
