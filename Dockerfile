FROM node:12.2.0-alpine
 
# set working directory
WORKDIR /app
 
# add /app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
 
# install and cache app dependencies
COPY package.json /app/package.json

# to update npm because it is sometimes buggy.
RUN npm install -g npm@latest 

# to remove the existing modules.
RUN rm -rf node_modules 

RUN npm install

# start app
CMD ["npm", "start"]
 
#docker build -t sample:dev .
#docker run -v ${PWD}:/app -p 3001:3000 --rm sample:dev

