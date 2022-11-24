FROM node:18.12.1
WORKDIR /usr/share/nodeapp-chat
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]