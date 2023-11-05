# Use the official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory
WORKDIR /app/Vehicle-Monitoring-System

# Copy package.json and package-lock.json to the working directory
COPY ./Vehicle-Monitoring-System/package*.json ./

# Install project dependencies
RUN npm install

# Expose port 80 as an environment variable (optional, for documentation)
ENV PORT 80

# Copy the rest of the application files
COPY ./Vehicle-Monitoring-System/ ./

# Build the Angular app
RUN ng build --prod

# Use a smaller NGINX image for production
FROM nginx:alpine

# Copy the built app from the previous stage to NGINX web root
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
