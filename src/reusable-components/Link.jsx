export default function LinkComp({ className, textBefore, textAfter }) {
  return (
    <p className={className}>
      {textBefore} {` Click `}
      <a
        href="https://tix.africa/discover/poolfestng"
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
