# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Create data directory for SQLite database
RUN mkdir -p /app/data

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the application's port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"] 