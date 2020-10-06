FROM node:12

WORKDIR /user/src/smallauthapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
