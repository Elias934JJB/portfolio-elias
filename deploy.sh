#!/bin/bash

# Déploiement automatique Astro sur GitHub Pages
echo "\n=== Déploiement Astro sur GitHub Pages ===\n"

# Variables à personnaliser
REPO_URL="https://github.com/<ton-utilisateur>/<nom-du-repo>.git" # <-- À MODIFIER
BRANCH="gh-pages"

# Build Astro
npm run build || { echo "Erreur lors du build Astro"; exit 1; }

# Supprime les anciens fichiers
rm -rf _astro images themes *.html *.css *.js *.svg *.jpg *.png *.pdf

# Copie les fichiers du dossier dist à la racine
cp -r dist/* . || { echo "Erreur lors de la copie des fichiers"; exit 1; }

git init

git remote add origin $REPO_URL || git remote set-url origin $REPO_URL
git checkout -b $BRANCH

git add .
git commit -m "Déploiement automatique du portfolio Astro sur GitHub Pages"
git push -f origin $BRANCH

cd ..

echo "\nDéploiement terminé !"
echo "Rendez-vous sur GitHub Pages pour activer la branche $BRANCH si besoin." 