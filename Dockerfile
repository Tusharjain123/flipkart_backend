FROM node:19.9.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .

FROM node:alpine as main

COPY --from=build /app /
EXPOSE 5001
CMD ["index.js"]
