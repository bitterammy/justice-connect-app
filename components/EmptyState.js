export default function EmptyState({ title, text, actionHref, actionLabel }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{text}</p>
      {actionHref && <a href={actionHref} className="btn">{actionLabel || "Get Started"}</a>}
    </div>
  );
}
