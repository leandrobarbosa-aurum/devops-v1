FROM node:12-alpine

ENV HOME=/home/app
WORKDIR $HOME 
#Ok! 

COPY package.json yarn.lock ./
# RUN npm install 
RUN yarn 

COPY . ./
    
RUN yarn build


EXPOSE 8082

CMD ["yarn", "start"]

