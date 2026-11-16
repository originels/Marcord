# Plugins Utilisateur Marcord (`src/userplugins`)

Ce dossier vous permet d'ajouter vos propres plugins personnalisés très facilement !

## Comment créer un plugin ?

1. Créez un nouveau dossier, par exemple : `src/userplugins/monPlugin`
2. Créez un fichier `index.ts` à l'intérieur :
```ts
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MonPlugin",
    description: "Mon super plugin Marcord personnalisé",
    authors: [{
        name: "Marc",
        id: 0n
    }],

    start() {
        console.log("MonPlugin a démarré dans Marcord !");
    },

    stop() {
        console.log("MonPlugin s'est arrêté !");
    }
});
```
3. Reconstruisez ou lancez le mode surveillance :
```bash
pnpm dev
# ou
pnpm build
```
Le plugin apparaîtra automatiquement dans les paramètres de Discord sous **Marcord > Plugins** !
