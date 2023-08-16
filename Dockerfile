FROM node:19.9.0
WORKDIR /
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 5000
CMD ["npm","start"]