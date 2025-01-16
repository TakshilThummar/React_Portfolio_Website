# Use an official Nginx image
FROM nginx:alpine

# Copy the build folder to Nginx's default HTML directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
