# Use official Lightweight Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application files
COPY . .

# Expose API port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]