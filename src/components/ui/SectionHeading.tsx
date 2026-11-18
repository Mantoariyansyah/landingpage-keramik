import { Eyebrow } from "./Eyebrow";

/** Heading section ber-grid (eyebrow + H2 dua baris + paragraf) seperti di desain. */
export function SectionHeading({
  eyebrow,
  lines,
  copy,
  dark = false,
}: {
  eyebrow: string;
  lines: readonly string[];
  copy: string;
  dark?: boolean;
}) {
  return (
    <div className={`section-heading ${dark ? "border-white/15" : ""}`.trim()}>
      <div>
        {dark ? (
          <Eyebrow className="text-[#c0a987]" lineClassName="bg-[#c0a987]">
            {eyebrow}
          </Eyebrow>
        ) : (
          <Eyebrow>{eyebrow}</Eyebrow>
        )}
        <h2 className="heading mt-5">
          {lines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
      </div>
      <p className={`section-copy ${dark ? "text-white/50" : ""}`.trim()}>{copy}</p>
    </div>
  );
}
