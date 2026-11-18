export function Eyebrow({
  children,
  className = "",
  lineClassName,
}: {
  children: React.ReactNode;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <p className={`eyebrow ${className}`.trim()}>
      <span className={lineClassName} />
      {children}
    </p>
  );
}
