# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
#RUN yarn install
RUN yarn install

# Install Vite globally
#RUN yarn global add vite
RUN npm install -g vite

# Copy all project files to the working directory
COPY . .

EXPOSE 5173

# Run the development server with Vite
CMD ["vite", "--host", "0.0.0.0"]
#CMD ["yarn","dev"]


