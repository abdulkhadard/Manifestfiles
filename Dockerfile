FROM ubuntu:latest 
WORKDIR /app
RUN apt-get update -y
RUN apt-get install apache -y
COPY . /var/www/html
EXPOSE 81
ENTRYPOINT apachectl -D FOREGROUND
