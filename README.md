# AI-SimCenter

AI for simulation-based medical education at VinUniversity.

**Website:** https://vinuni-ai-simcenter.github.io/

This is a static research project website. GitHub Pages serves the root of the `main` branch. No build step, server, API key, or paid service is required.

## Editing

- `index.html`: project content, team roster, and profile links.
- `styles.css`: the original medical project template stylesheet, preserved unchanged.
- `site.css`: accessibility, centered and aligned team cards, and research section layout.
- `static/css/bulma.min.css`: the same Bulma 0.9.1 framework used by the reference.
- `assets/css/fonts.css` and `assets/fonts/`: locally hosted Inter typography.
- `script.js`: back-to-top interaction.
- `assets/`: portraits, university branding, and neutral avatar placeholders.

Nguyen Quynh Tram uses a neutral placeholder until a photo is available. Nguyen Bao Linh, My Anh Tran Nguyen, and Nguyen Hoang Long use photos supplied by the project owner. Existing matching portraits and university branding come from the [VinUni Medical Translation project](https://vinuni-medical-mt.github.io/).

The page uses that site's actual template structure, Bulma version, stylesheet, team cards, headings, and typography, with AI-SimCenter's project content and roster substituted. See [NOTICE.md](NOTICE.md) for template attribution and third-party licenses.

Stylesheet and script URLs in `index.html` include content hashes. After editing those assets, update the corresponding `?v=` value to the first 12 characters of its SHA-256 hash so returning visitors receive the new version.

For local preview, run `python -m http.server 4173`, then open http://localhost:4173.

GitHub Pages currently provides free hosting for public repositories, subject to GitHub's terms and service availability. No permanent free-hosting guarantee is implied.


Repository: https://github.com/vinuni-ai-simcenter/vinuni-ai-simcenter.github.io

The project account hosts this as its GitHub Pages site. Update the root of `main` to publish changes.

## Updating from VS Code

Open this repository folder in VS Code, edit the page or assets, then use Source Control to stage and commit the changes. Select **Sync Changes** to push `main`; GitHub Pages publishes the update automatically. Git Credential Manager is configured locally to use the `vinuni-ai-simcenter` account for this checkout.
