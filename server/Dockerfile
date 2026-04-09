FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
# À changer en prod par CMD ["npm", "start"]
CMD ["npm", "run", "dev"]