export default function Stars({ rating = 0, count }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= full ? "" : "dim"}>★</span>
      ))}
      {typeof count === "number" && <span className="muted small"> ({count})</span>}
    </span>
  );
}
