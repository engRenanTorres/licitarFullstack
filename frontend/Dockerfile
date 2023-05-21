# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Install Vite globally
RUN yarn global add vite

# Copy all project files to the working directory
COPY . .

# Run the development server with Vite
CMD ["vite", "--host", "0.0.0.0"]



