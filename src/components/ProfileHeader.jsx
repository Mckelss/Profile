export default function ProfileHeader({ client }) {
  const initials = client.fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <section className="profile-header" aria-label="Profile">
      <div className="avatar" style={{ '--avatar-color': client.accent || '#d9e1d4' }}>
        {client.profileImage ? (
          <img src={client.profileImage} alt={`${client.fullName}`} />
        ) : (
          <span aria-label={`${client.fullName} initials`}>{initials}</span>
        )}
      </div>
    </section>
  );
}
