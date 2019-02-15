FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install mocha -g

COPY . .

EXPOSE 3000

CMD ["npm", "start"]