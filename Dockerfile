FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website HTML, CSS, JS, PNG, and PDF files
COPY *.html *.css *.js *.png *.pdf *.txt *.xml /usr/share/nginx/html/
COPY favicon/ /usr/share/nginx/html/favicon/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
