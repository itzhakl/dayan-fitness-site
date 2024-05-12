FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

COPY nagishli-files /app/dist/nagishli-files
COPY nagishli_beta.js /app/dist

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
