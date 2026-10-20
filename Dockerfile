FROM nginx:1.27-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website HTML, CSS, JS, PNG, and PDF files. *.html includes every page
# (index, products, move-concierge, property-connect, nexus-ai, custom-ai-systems,
# about, contact, 404) plus the header/footer partials.
COPY *.html *.css *.js *.png *.pdf *.txt *.xml /usr/share/nginx/html/
# Favicons are linked from the web root on every page; copy them there
# (the favicon/ subdirectory copy is kept for any direct references).
COPY favicon/ /usr/share/nginx/html/favicon/
COPY favicon/ /usr/share/nginx/html/
# assets/ includes the product screen placeholders (assets/products/placeholders; see PLACEHOLDERS.md there).
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
