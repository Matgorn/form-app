FROM node:14-alpine
WORKDIR /usr/src/form-app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]