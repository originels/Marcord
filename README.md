# 🟣 Marcord

**Marcord** est un mod client Discord ultra-léger et personnalisable, spécialement optimisé pour macOS.
Basé sur une architecture performante et moderne, Marcord vous donne le contrôle total sur votre client Discord avec **0 télémétrie**.

---

## 🔒 Confidentialité & Audit Réseau ("Zéro Télémétrie")

Marcord a été vérifié et audité pour garantir qu'aucune donnée personnelle n'est envoyée à l'extérieur :
- **Blocage de la télémétrie Discord native (`NoTrack`)** : Tous les appels aux services "Science", métriques, et Sentry de Discord sont interceptés et bloqués à la racine.
- **Aucune télémétrie Marcord** : Aucun service d'analytics tiers (Google Analytics, Sentry, Mixpanel, etc.) n'est intégré.
- **Désactivation des pings externes** : Les requêtes d'arrière-plan vers les serveurs externes de badges ont été neutralisées.
- **Gestion des plugins tiers** : Les plugins nécessitant des services externes (Spotify, DeepL/Google Translate, DeArrow, ReviewDB, etc.) sont tous **désactivés par défaut** et ne s'exécutent que si vous choisissez de les activer.

---

## 🚀 Utilisation sur Mac (macOS)

### Prérequis
- macOS (Apple Silicon ou Intel)
- Node.js (v20+) & pnpm (`pnpm -v`)
- Discord ou Discord Canary installé dans `/Applications`

### 1. Installation des dépendances
```bash
pnpm install
```

### 2. Compilation
```bash
pnpm build
```

### 3. Injecter Marcord dans Discord
Pour injecter Marcord dans votre Discord officiel :
```bash
pnpm inject
```

Pour Discord Canary :
```bash
pnpm inject:canary
```

> **Note :** Pensez à redémarrer complètement Discord après l'injection (`Cmd+Q` puis relancez).

### 4. Désinstaller Marcord (Revenir au Discord officiel)
```bash
pnpm uninject
# ou pour Canary :
pnpm uninject:canary
```

---

## 🛠️ Modifier Marcord comme vous voulez

### Mode Développement (Watch)
Modifiez le code en direct ! Chaque modification recompile automatiquement le mod :
```bash
pnpm dev
# ou
pnpm watch
```
Après modification, appuyez simplement sur `Cmd+R` dans Discord pour recharger l'interface.

### Ajouter vos propres Plugins
Ajoutez simplement vos plugins personnalisés dans le dossier `src/userplugins/` !
Chaque sous-dossier contenant un fichier `index.ts` est automatiquement détecté et chargé dans l'application. Consultez [src/userplugins/README.md](src/userplugins/README.md) pour un exemple pas-à-pas.

---

## 📁 Raccourcis pratiques

| Commande | Action |
|---|---|
| `pnpm build` | Compile Marcord |
| `pnpm dev` | Compile et surveille les changements en temps réel |
| `pnpm inject` | Injecte Marcord dans Discord |
| `pnpm uninject` | Désinstalle Marcord de Discord |
| `pnpm restart:discord` | Ferme et relance Discord proprement |

---

## 📜 Licence
GPL-3.0-or-later.
