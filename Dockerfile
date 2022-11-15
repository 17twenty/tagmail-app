# build stage
FROM node:lts-alpine as build-stage

# install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# source code build stage
COPY . ./
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# NGINX conf
ENV HTTP_PORT 9000
ENV ROOT_FOLDER /usr/share/nginx/html
COPY --from=build-stage /app/docker/templates/*.template /etc/nginx/templates/
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]