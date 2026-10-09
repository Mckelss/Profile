const socialMarks = {
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5.2" stroke="#E4405F" /><circle cx="12" cy="12" r="4.1" stroke="#E4405F" /><circle cx="17.65" cy="6.45" r="1.1" style={{ fill: '#E4405F', stroke: 'none' }} /></>,
  facebook: <path d="M13.35 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14C16.34 3.05 15.33 3 14.16 3c-2.89 0-4.87 1.77-4.87 5.02V9.6H6v3.2h3.29V21h4.06Z" style={{ fill: '#1877F2', stroke: 'none' }} />,
  tiktok: <>
    <path d="M19.59 6.69a6.76 6.76 0 0 1-3.98-3.98A6.7 6.7 0 0 1 15.3 1h-4.02v15.72a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.13V9.87a7 7 0 0 0-.86-.05A6.9 6.9 0 1 0 15.3 16.7V8.62a10.7 10.7 0 0 0 6.26 2.01V6.61c-.68 0-1.34-.08-1.97-.24Z" transform="translate(-.8 .3)" style={{ fill: '#25F4EE', stroke: 'none' }} />
    <path d="M19.59 6.69a6.76 6.76 0 0 1-3.98-3.98A6.7 6.7 0 0 1 15.3 1h-4.02v15.72a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.13V9.87a7 7 0 0 0-.86-.05A6.9 6.9 0 1 0 15.3 16.7V8.62a10.7 10.7 0 0 0 6.26 2.01V6.61c-.68 0-1.34-.08-1.97-.24Z" transform="translate(.8 -.3)" style={{ fill: '#FE2C55', stroke: 'none' }} />
    <path d="M19.59 6.69a6.76 6.76 0 0 1-3.98-3.98A6.7 6.7 0 0 1 15.3 1h-4.02v15.72a2.88 2.88 0 1 1-2.88-2.88c.3 0 .59.05.86.13V9.87a7 7 0 0 0-.86-.05A6.9 6.9 0 1 0 15.3 16.7V8.62a10.7 10.7 0 0 0 6.26 2.01V6.61c-.68 0-1.34-.08-1.97-.24Z" style={{ fill: '#111111', stroke: 'none' }} />
  </>,
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{socialMarks[icon]}</svg>
            </span>
            <span className="social-button__label">{label}</span>
            <span className="social-button__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
