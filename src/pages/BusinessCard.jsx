import ProfileHeader from '../components/ProfileHeader.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

export default function BusinessCard({ client }) {
  return (
    <main className="page-shell">
      <article className="business-card">
        <ProfileHeader client={client} />
        <header className="identity">
          <h1>{client.fullName}</h1>
        </header>

        <SocialLinks links={client.socialLinks} />
        <footer className="powered-by">Powered by <strong>TapTapTap</strong></footer>
      </article>
    </main>
  );
}
