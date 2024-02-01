import { decode } from "html-entities";

export function parseHtml(html) {
  return html.replace(
    /(content|href|src|srcSet)="([^"]+)"/g,
    (match, attribute, value) => `${attribute}="${decode(value)}"`,
  );
}
