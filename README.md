Pet Management API - Backend

Ce projet est une API de gestion des animaux de compagnie, construite avec NestJS et MySQL, utilisant TypeORM pour gérer les entités Person et Animal. Il permet de créer, lire, mettre à jour et supprimer des informations sur les personnes et les animaux.

Prérequis
Avant de démarrer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16.x ou plus récente)
MySQL (version 8.x ou plus récente)
Git
Installation

Suivez les étapes ci-dessous pour cloner le projet et configurer la base de données.

1. Cloner le dépôt
Commencez par cloner le dépôt depuis GitHub.


git clone <URL_DU_DEPOT_GIT>
cd pet-management-backend

2. Installer les dépendances
Ensuite, installez les dépendances du projet.
  npm install

4. Configurer la base de données MySQL
Créez une nouvelle base de données MySQL pour le projet :
  CREATE DATABASE Data_management;
Mettez à jour la configuration de connexion à MySQL dans le fichier app.module.ts :


TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',       // Remplacez par votre nom d'utilisateur MySQL
  password: 'root',       // Remplacez par votre mot de passe MySQL
  database: 'Data_management',
  entities: [Person, Animal],
  synchronize: false,     // Assurez-vous que 'synchronize' est sur false
}),

4. Lancer l'application
Après avoir configuré la base de données et installé les dépendances, vous pouvez démarrer le serveur NestJS :
    npm run start
Si tout est configuré correctement, vous devriez voir le message suivant dans le terminal :

        [Nest] X  - Nest application successfully started

Vous pouvez maintenant interagir avec l'API à l'aide des points d'accès disponibles (par exemple, /people, /animal).

Utilisation de l'API
L'API expose des endpoints pour gérer les personnes et les animaux. Voici quelques exemples d'utilisation :

Récupérer toutes les personnes
    GET /people
Ajouter un nouvel animal
    POST /animal
Lancer l'application depuis Git

  Pour lancer l'application à partir de Git :

  Cloner le dépôt :
      git clone <URL_DU_DEPOT_GIT>
Naviguer dans le répertoire du projet :
      cd pet-management-backend
Installer les dépendances :
        npm install
        
Configurer MySQL et la base de données :

Créez une base de données MySQL et configurez le fichier app.module.ts pour correspondre à votre configuration locale (nom d'utilisateur, mot de passe, nom de la base de données).

Lancer l'application :
          npm run start
Vous pouvez maintenant tester les routes disponibles via un client HTTP (Postman, Curl, etc.) ou un navigateur.

