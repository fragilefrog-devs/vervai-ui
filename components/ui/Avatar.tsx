import Icon from "./Icon";

export default function Avatar({
  src,
  name,
  size = 32,
  className = "",
}: {
  src: string;
  name?: string;
  size?: number;
  className?: string;
}) {
  if (!src) {
    return (
      <span
        aria-label={name}
        className={`inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary-container font-caption-bold shrink-0 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.42 }}
      >
        <Icon name="person" size={size * 0.6} />
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={name || "avatar"}
      className={`rounded-full object-cover shrink-0 ring-1 ring-outline-variant/40 ${className}`}
      src={src}
      style={{ width: size, height: size }}
    />
  );
}