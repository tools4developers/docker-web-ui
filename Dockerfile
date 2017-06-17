FROM golang:1.8.3-alpine
LABEL maintainer="memclutter@gmail.com"
ADD ./dist /dist
RUN go get github.com/tools4developers/docker-web-api
VOLUME "/var/run/docker.sock"
CMD ["docker-web-api", "-dist=/dist/", "-domain=0.0.0.0"]
EXPOSE 8080
