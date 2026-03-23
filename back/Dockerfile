FROM node:20-alpine3.23 AS dev

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]

FROM node:20-alpine3.23 AS prod

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

CMD ["npm", "start"]