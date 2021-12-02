FROM node:14-alpine
WORKDIR /usr/src/form-app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . ./

CMD ["yarn", "start"]