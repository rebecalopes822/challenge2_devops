FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN useradd -m appuser
USER appuser

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "app.js"]
