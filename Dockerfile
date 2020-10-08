FROM node:lts-buster

WORKDIR /usr/src/smallauthapp

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "node", "." ]
