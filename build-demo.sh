#!/usr/bin/env bash
# Construit la démo statique publiée par GitHub Pages dans docs/ :
#   docs/       → version principale (maeliz-consulting)
#   docs/test/  → environnement de test, avec les corrections de l'audit
set -euo pipefail
cd "$(dirname "$0")"
rm -rf docs
for app in maeliz-consulting maeliz-consulting-test; do
  (cd "$app" && npm ci --silent && npx tsc -b && npx vite build --base ./ --outDir dist-demo --emptyOutDir)
done
mv maeliz-consulting/dist-demo docs
mv maeliz-consulting-test/dist-demo docs/test
# Démo : pas d'indexation par les moteurs (coordonnées encore provisoires).
for f in docs/index.html docs/test/index.html; do
  sed -i 's|<meta charset="UTF-8" />|<meta charset="UTF-8" />\n    <meta name="robots" content="noindex, nofollow" />|' "$f"
done
touch docs/.nojekyll
echo "Démo construite dans docs/"
