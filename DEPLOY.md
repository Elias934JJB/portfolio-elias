# Instructions de déploiement sur IONOS

## Prérequis

1. Avoir un compte IONOS avec un hébergement web
2. Avoir les informations de connexion FTP :
   - Hôte FTP
   - Utilisateur FTP
   - Mot de passe FTP
   - Port FTP (généralement 21)

## Étapes de déploiement

1. **Préparation du site**
   ```bash
   npm install
   npm run build
   ```

2. **Configuration du .htaccess**
   - Le fichier `.htaccess` est déjà configuré pour :
     - Redirection vers HTTPS (à décommenter une fois le SSL activé)
     - Gestion des erreurs 404
     - Compression GZIP
     - Mise en cache des ressources
     - Protection des fichiers sensibles

3. **Déploiement automatique**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh <hôte_ftp> <utilisateur_ftp> <mot_de_passe_ftp> <port_ftp>
   ```

   Exemple :
   ```bash
   ./deploy.sh ftp.votredomaine.com utilisateur motdepasse 21
   ```

4. **Vérification**
   - Vérifiez que le site est accessible via votre nom de domaine
   - Testez la redirection HTTPS (si activée)
   - Vérifiez que la page 404 personnalisée s'affiche correctement

## Notes importantes

- Le site est construit en statique, donc compatible avec l'hébergement mutualisé IONOS
- Assurez-vous que tous les chemins dans le code sont relatifs
- Vérifiez que les permissions des fichiers sur le serveur sont correctes (généralement 644 pour les fichiers et 755 pour les dossiers)

## Support

En cas de problème :
1. Vérifiez les logs d'erreur dans le panneau d'administration IONOS
2. Assurez-vous que tous les fichiers ont été correctement transférés
3. Vérifiez la configuration du `.htaccess`
4. Contactez le support IONOS si nécessaire 