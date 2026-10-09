// Add a client by copying this object and choosing a unique URL slug.
// Example URL: https://yourdomain.com/card/jamie-lee
export const clients = {
  'alex-morgan': {
    fullName: 'Michael Cesar C. Generalao',
    // Put uploaded portraits in public/images and use a path such as /images/alex.jpg.
    // Leave this empty to show the initials in a color-only circle.
    profileImage: '/img/image.jpg',
    // Accent color for the profile initials circle. TapTapTap-inspired teal.
    accent: '#19b5b3',
    // Add, remove, or edit social links here. Use the client's full profile URL.
    // Use one of the supported icon keys: instagram, facebook, tiktok.
    socialLinks: [
      { label: 'Instagram', url: 'https://www.instagram.com/_michaelce/', icon: 'instagram' },
      { label: 'Facebook', url: 'https://www.facebook.com/michael.mcg11', icon: 'facebook' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@akagami00001?_r=1', icon: 'tiktok' },
    ],
  },
};
