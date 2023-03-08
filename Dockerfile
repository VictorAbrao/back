FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY src ./src
COPY src/routes ./src/routes

RUN npm install --only=production

COPY . .

CMD ["npm", "run", "dev"]