# Lamisa Mahmud — Portfolio Redesign

A responsive editorial + futuristic portfolio built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Files

- `index.html` — page structure and portfolio content
- `style.css` — design system, responsive layout, visual artwork, and animations
- `script.js` — mobile menu, scroll reveals, cursor glow, and interactive 3D hero tilt
- `assets/Lamisa_Mahmud_Resume.pdf` — the CV supplied for this redesign
- `assets/portrait.jpg` — **add your new professional portrait here** (not included yet)

## Preview locally

Open `index.html` in a browser. For the best local preview, use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to your existing GitHub Pages site

1. Download and unzip this package.
2. Add your portrait as `assets/portrait.jpg` (JPG or JPEG).
3. Review the content and contact details in `index.html`.
4. Back up the existing repository files.
5. Replace the repository's `index.html`, and add `style.css`, `script.js`, and the `assets` folder.
6. Commit and push to the `main` branch.
7. In GitHub, check **Settings → Pages** and confirm the site is deployed from the intended branch/folder.

Your existing site URL should remain:
https://lamisa26.github.io/Lamisa.Portfolio/

## Before publishing — please verify

- The CV currently lists `lamisa.mahmud14@gmail.com`; the existing website previously displayed `lamisaprithula26@gmail.com`. This redesign uses the CV email. Confirm which address you want public.
- Your existing website describes Leaf Disease Classification with EfficientNetB0, while your uploaded CV says MobileNetV2. The new page deliberately avoids naming the final architecture in the project card. Confirm the correct model before adding a detailed case study.
- The current public website describes CARE-RAG as a developed multimodal system. Check the final project title, implementation status, and claims against your thesis/report before publishing.
- Add GitHub repository links for individual projects where available.
- The new portrait is not included; the page shows a styled placeholder until you add `assets/portrait.jpg`.

## Editing tips

- Update text, URLs, and project details in `index.html`.
- Change colors in the `:root` block at the top of `style.css`.
- The 3D hero artwork is CSS-based and reacts to pointer movement; no large 3D library is required.
- Animations respect the visitor's `prefers-reduced-motion` accessibility setting.
- Fonts are loaded from Google Fonts; a system-font fallback is included.
