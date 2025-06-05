FROM node:18-alpine3.17

WORKDIR /usr/src/app

RUN apk add --no-cache curl

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD pnpm run preview --host
