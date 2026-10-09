# NFC Digital Business Card

A static, responsive social profile page for NFC-linked cards. The page displays a client profile and the Facebook, Instagram, and TikTok links configured in `src/data/clients.js`; there is no backend, database, login, or online editing.

## Project structure

```text
nfc-business-card/
├── public/
│   └── images/                 # Add client portraits here
├── src/
│   ├── components/             # Shared profile and social links
│   ├── data/clients.js         # Edit client information and add slugs here
│   ├── pages/                  # Card view and not-found page
│   ├── App.jsx                 # URL-based client selection
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Set up and run

Install Node.js (LTS), then from the project directory run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/card/alex-morgan`.
Create a production build with `npm run build`; `npm run preview` serves that build locally.

## Add or update a client

1. Copy an entry in `src/data/clients.js` and assign it a unique slug, for example `jamie-lee`.
2. Update the client's name shown under the profile.
3. Edit `socialLinks` to provide each client's Facebook, Instagram, and TikTok profile URLs. Each link has a label, full URL, and matching icon key (`facebook`, `instagram`, or `tiktok`).
4. Put the portrait in `public/images/` and set `profileImage` to `/images/your-file.jpg`. Keep it empty to show initials. Change `accent` to set the initials circle color.
5. Open `/card/jamie-lee` locally and open each social link to confirm it points to the client's profile.
6. Run `npm run build` and redeploy after source or image changes.

## Deploy

### Vercel or Netlify

Import the repository, use `npm run build` as the build command and `dist` as the output directory. The included `vercel.json` rewrite and `public/_redirects` file route direct `/card/slug` visits to the app shell. Add a custom domain in the host dashboard and follow its DNS instructions.

### GitHub Pages

Set `base` in `vite.config.js` to the repository path (for example, `'/repository-name/'`) if deploying beneath `username.github.io/repository/`. The router follows this setting. Configure the Pages build workflow to publish `dist`. Because GitHub Pages does not provide SPA rewrites for arbitrary paths by default, enable a 404-to-index fallback (or use hash routing) before using `/card/slug` links. A custom domain can serve at the root path and avoids the repository subpath adjustment.

## Program and test NFC cards

Write each tag with a standard NDEF URI record containing the full HTTPS URL, for example `https://yourdomain.com/card/alex-morgan`. Test the URL and programmed NFC tag on Android and iPhone. NFC behavior can vary by device settings and support.

## Notes

- Adding or changing a client requires a rebuild and redeploy; visitor requests only read the deployed local configuration.
- Use full HTTPS URLs for each public social profile. Those URLs are visible in the built site.
- This project uses `BrowserRouter`; Vercel and Netlify need the normal SPA fallback configured for direct `/card/slug` visits. See the host-specific note above for GitHub Pages.
