# Use the official Node.js image as the base image
FROM node:14 AS frontend

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

RUN npm run build --prod

EXPOSE 4200

