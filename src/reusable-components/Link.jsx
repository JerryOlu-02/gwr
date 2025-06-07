export default function LinkComp({
  className,
  textBefore,
  textAfter,
  url,
  answer,
}) {
  return (
    <p className={className}>
      {textBefore} {` ${answer} `}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}
      >
        {`here `}
      </a>
      {textAfter}
    </p>
  );
}
