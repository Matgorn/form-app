FROM node:14-alpine3.12
WORKDIR /usr/src/form-app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . ./

CMD ["yarn", "start"]