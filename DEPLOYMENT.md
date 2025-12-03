# Instructions de déploiement sur GitHub Pages

## Configuration GitHub Pages

1. Allez sur votre repository GitHub : https://github.com/DDouraid/DDouraid.github.io
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Source** : `GitHub Actions`
5. Le workflow GitHub Actions se déclenchera automatiquement à chaque push sur la branche `main`

## Accès au site

Une fois le déploiement terminé (quelques minutes), votre portfolio sera accessible à :
**https://DDouraid.github.io**

## Vérification du déploiement

1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez le workflow "Deploy to GitHub Pages" en cours d'exécution
3. Une fois terminé (icône verte), votre site sera en ligne

## Mise à jour du site

Pour mettre à jour le site, il suffit de :
```bash
git add .
git commit -m "Votre message"
git push
```

Le workflow GitHub Actions se déclenchera automatiquement et redéploiera votre site.

