# Use the official Nginx image
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy project files
COPY clock.html /usr/share/nginx/html/index.html
COPY clock.css /usr/share/nginx/html/style.css
COPY clock.js /usr/share/nginx/html/script.js

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]