FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000 8080

RUN npm run build

CMD ["node", "dist/index.js"]
