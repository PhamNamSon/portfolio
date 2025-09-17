FROM node:22-alpine AS builder

WORKDIR /app

COPY app/package*.json ./

RUN npm ci

COPY app .

RUN npm run build  # outputs /app/dist

FROM nginx:1.29-alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/site.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]