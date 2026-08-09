# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-08-07

### Added
- Created `js/analytics.js` to serve as the centralized project analytics interface, loading Microsoft Clarity and Google Analytics dynamically and routing events safely.
- Added media queries to `css/blog.css` to make the blog layout completely responsive on screens <= 768px.
- Appended HTTP security headers to `netlify.toml` including Content-Security-Policy (CSP) and X-Frame-Options (SAMEORIGIN) to prevent clickjacking and security exploits.
- Custom `:focus-visible` ring outlines in `css/theme.css` to meet accessibility guidelines.

### Fixed
- Fixed unlinked stylesheets in `/blog/` html files by adding `<link href="../css/theme.css">` to all blog post heads, resolving unrendered typography and color styling.
- Resolved DOM nesting errors in `index.html` by placing the `<h2>` tag outside the `<p>` container in the pricing view.
- Removed duplicate event listeners for `btnPricing` and `btnContact` in `js/app.js` to optimize interactive execution cycles.
- Fixed undefined `--accent` color variable in `css/theme.css` used in phone call buttons.
- Implemented deep linking and back/forward browser navigation support in `js/blog.js` using `window.location.hash` mappings.
- Standardized all codebase headers and section comments to comply with official LANZAR Coding Standards.
