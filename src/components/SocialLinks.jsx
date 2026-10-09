const socialMarks = {
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-mark__fill" cx="17.5" cy="6.8" r="1" /></>,
  facebook: <path className="social-mark__fill" d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />,
  tiktok: <><path d="M14 3v12.2a3.5 3.5 0 1 1-3-3.5" /><path d="M14 3c.3 3 2.1 5 5 5" /></>,
};

export default function SocialLinks({ links = [] }) {
  const visibleLinks = links.filter(({ label, url }) => label && url);
  if (!visibleLinks.length) return null;

  return (
    <section className="social-section" aria-labelledby="social-heading">
      <div id="social-heading" className="section-label">Follow me</div>
      <div className="social-list">
        {visibleLinks.map(({ label, url, icon }) => (
          <a className="social-button" href={url} key={`${label}-${url}`} target="_blank" rel="noopener noreferrer">
            <span className="social-button__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{socialMarks[icon]}</svg>
            </span>
            <span className="social-button__label">{label}</span>
            <span className="social-button__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
