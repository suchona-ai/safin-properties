# Safin Properties

Static site for GitHub Pages. The pages sit at the repository root:

```
index.html
contact/index.html
blog/index.html
blog/<article>/index.html
css/styles.css
js/site.js
assets/
  hero/
  properties/
  services/
  clients/
  authors/
  blog/
```

Preview it locally:

```bash
python3 -m http.server 4173
```

Pushes to `main` publish those files with GitHub Actions. In the repository settings, set **Pages → Source** to **GitHub Actions**. The site is served at https://suchona-ai.github.io/safin-properties/. Links are relative, so they resolve under that path.
