FROM node:16
ENV HOME=/home/app
COPY package.json $HOME/node_docker/
WORKDIR $HOME/node_docker
RUN npm install --silent --progress=false
COPY . $HOME/node_docker
EXPOSE 3000
CMD ["npm", "start"]
