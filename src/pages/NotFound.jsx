import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__mark">N</div>
      <p className="section-kicker">Link not found</p>
      <h1>Business card<br />not found.</h1>
      <p>That card link may be out of date. Check the URL and try again.</p>
      <Link to="/" className="not-found__link">Go to sample card <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
