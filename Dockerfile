FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . ./

RUN npm run build-cloud

CMD [ "node", "server.js" ]
