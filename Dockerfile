FROM node:20.18.1-alpine3.19

WORKDIR /usr/app-escola

COPY package.json .

RUN npm install

EXPOSE 3000

