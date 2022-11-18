FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY dist/ .
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 3000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]