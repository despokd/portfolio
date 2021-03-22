# pull node.js web server as "Base OS" (Host OS not mandatory, because docker runs already linux for itself)
FROM node:14-alpine

# directory in container, where app will be placed
WORKDIR /usr/src/app

# get config files from app and place them in container
COPY rollup.config.js ./
COPY package*.json ./

# install dependencies from app
RUN npm install

# get app and place in container
COPY ./src ./src
COPY ./public ./public

# build production files of app
RUN npm run-script build

# server port
EXPOSE 5000

# server ip
ENV HOST=0.0.0.0

# start app
CMD [ "npm", "start" ]