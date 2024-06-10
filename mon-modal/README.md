# Mon Package React

Ce projet est un package npm créé avec React.

## Prérequis

- Node.js et npm installés sur votre machine.
- Un compte npm pour publier le package.

## Installation

1. Créez un nouveau projet React en utilisant Create React App :
    ```
    npx create-react-app mon-package
    cd mon-package
    npm start
    ```

2. Créez un composant React que vous souhaitez publier en tant que package npm.

## Configuration du package.json

Mettez à jour votre `package.json` pour inclure les informations suivantes :

```json
{
  "name": "mon-package",
  "version": "0.1.0",
  "main": "src/index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "prepublish": "npm run build"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```
## Publication
Connectez-vous à npm en utilisant la commande npm login.
Naviguez vers le répertoire de votre package.
Publiez votre package en utilisant la commande npm publish.

## Vérification
Vérifiez que votre package a été publié en allant sur sa page sur le site web de npm. L’URL sera `https://www.npmjs.com/package/mon-package.`