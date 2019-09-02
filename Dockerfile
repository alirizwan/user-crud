FROM node:10
WORKDIR /usercrud
COPY package*.json ./
RUN npm install
COPY . .
CMD npm start