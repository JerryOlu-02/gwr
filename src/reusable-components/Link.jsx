export default function LinkComp({ className, textBefore, textAfter, url }) {
  return (
    <p className={className}>
      {textBefore} {` Click `}
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
