FROM node:16.14.0-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY . /app
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]