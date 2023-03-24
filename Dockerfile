FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

ENV GOOGLE_APPLICATION_CREDENTIALS=./firebase.json
ENV PORT=3001
EXPOSE 3001

CMD [ "node", "index.js" ]