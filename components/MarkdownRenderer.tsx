// app/components/MarkdownRenderer.tsx
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default function MarkdownRenderer({ content }: { content: string }) {
  const html = md.render(content);

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
