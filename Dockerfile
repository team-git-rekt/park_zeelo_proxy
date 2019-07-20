FROM node

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]