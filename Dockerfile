# Utiliser une image Node.js officielle comme base
FROM node:22-slim

# Installer les dépendances système pour `wait-for-it`
RUN apt-get update && apt-get install -y wait-for-it

# Définir le répertoire de travail
WORKDIR /app

# Définir les arguments (non utilisés mais disponibles si besoin plus tard)
ARG PORT=5000

# Définir les variables d'environnement
ENV NODE_ENV=production \
    PORT=${PORT}

# Copier les fichiers de configuration des dépendances
COPY package*.json ./

# Installer les dépendances uniquement
RUN npm install --production

# Copier tous les fichiers
COPY . .

# Exposer le port
EXPOSE 5000

# Lancer l'application (tu peux mettre wait-for-it si un autre service doit être prêt avant)
CMD ["node", "server.js"]
