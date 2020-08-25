# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY front-end/package*.json ./
RUN npm install
COPY ./front-end/ ./
RUN npm run build

# production stage
FROM node:lts-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
COPY back-end/package*.json ./
RUN npm install
COPY back-end/server.js ./

EXPOSE 8080
CMD ["npm", "run", "start"]