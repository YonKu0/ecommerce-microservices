# 1) Build
FROM node:23-alpine AS builder

# Use the official Node.js image as a base image
WORKDIR /app


COPY package*.json ./

# Install the dependencies
RUN npm install

COPY . .

RUN npm run build

# 2) Serve
FROM nginx:stable-alpine

# Set the working directory in the container to /app
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
