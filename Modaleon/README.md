# Mon Package React
Ce projet est un package npm créé avec React.

### Sommaire
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration du package.json](#configuration-du-packagejson)
- [TsConfig](#tsconfig)
- [Babel](#babel)
- [Compile](#Compile)
- [Test](#test)
- [Publication](#publication)
- [Vérification](#vérification)


## Prérequis
Une version Node JS a jour.
Un compte npm pour publier le package.

## Installation
Créer un dossier puis a l'aide du terminal entrer la commande suivante pour l'installation du projet `npm init` et suivre les etapes de l'installation.

## Installation devDependencies
Pourquoi utiliser devDependencies ?
1. Séparation des préoccupations : En séparant les dépendances nécessaires au développement de celles nécessaires à l'exécution, vous gardez votre environnement de production propre et léger.
2. Installation optimisée : Les utilisateurs de votre package n'ont pas besoin de télécharger et d'installer les outils de développement lorsqu'ils installent votre package.
3. Sécurité : Moins de dépendances installées en production signifie moins de vecteurs d'attaque potentiels.

Ce sont des outils et des bibliothèques dont on a  besoin pour développer, tester et construire notre projet.

Pour installer une dépendance en tant que devDependency, utilisez l'option --save-dev (ou -D) avec la commande npm install ou yarn add. Par exemple :

`npm install --save-dev typescript`
# ou avec Yarn
`yarn add --dev typescript`

## Configuration du package.json
Mettez à jour votre package.json pour inclure les informations suivantes :
```json
{
  "name": "nnom du projet",
  "version": "0.0.5",
  "description": "Déscritpion du projet",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx rimraf dist && tsc --declarationDir dist --emitDeclarationOnly && npx babel ./lib --out-dir dist --extensions \".ts,.tsx\" --copy-files --presets=@babel/preset-env,@babel/preset-react,@babel/preset-typescript"
  },
  "author": "Auteur",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.24.7",
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/preset-react": "^7.24.7",
    "@babel/preset-typescript": "^7.24.7",
    "@types/react": "^18.3.3",
    "react": "^18.3.1",
    "rimraf": "^5.0.7",
    "typescript": "^5.5.2"
  },
  "peerDependencies": {
    "react": "18.3.1"
  }
}
```
## TsConfig
Le fichier tsconfig.json est utilisé pour configurer le compilateur TypeScript (tsc). Il définit les options de compilation pour votre projet.
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "esnext",
        "declaration": true,
        "declarationDir": "./dist/types",
        "outDir": "./dist",
        "strict": true,
        "jsx": "react",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": [
        "./lib"
    ],
    "exclude": ["node_modules", "dist"]
}
```
## Babel
Babel est un transpileur qui convertit le code JavaScript moderne (par exemple, ES6+) en une version compatible avec les navigateurs plus anciens
# Voici comment il fonctionne :
1. Présentation des presets : Les presets (ensembles de plugins) définissent les transformations à appliquer au code. Par exemple, @babel/preset-env gère la compatibilité avec les navigateurs.
2. Plugins : Les plugins individuels effectuent des transformations spécifiques (par exemple, transformer les classes en fonctions, gérer les opérateurs de décomposition, etc.).
3. Configuration : Vous configurez Babel via un fichier .babelrc ou dans votre package.json.
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-transform-typescript"
    ]
}

```
## Compile
`npx rimraf dist && tsc --declarationDir dist --emitDeclarationOnly && npx babel ./lib --out-dir dist --extensions \".ts,.tsx\" --copy-files --presets=@babel/preset-env,@babel/preset-react,@babel/preset-typescript` 
nettoie, compile et transpile votre code TypeScript en JavaScript prêt à être utilisé
## Test
Creer un projet test pour tester la library npm avant de publier pour voir son fonctionnement.
Pour réaliser le test il faudra suivre c'est étapes dans le terminal de la library vers npm link puis se rendre dans le projet test 
et dans le terminal du projet faire `npm link`suivi du nom exemple `npm link mon-npm` 
une vois terminé se rendre dans le dossier node_modules du projets test et de cherche le package pour voir si il se trouve par la suite de faire l'import dans un fichier pour l'exuter le projet test avec `npm start` et voir le fonctionnement du package.

## Publication
Connectez-vous à npm en utilisant la commande npm login.

Naviguez vers le répertoire de votre package.

Publiez votre package en utilisant la commande npm publish.

## Vérification
Vérifiez que votre package a été publié en allant sur sa page sur le site web de npm. L’URL sera https://www.npmjs.com/package/modaleon.