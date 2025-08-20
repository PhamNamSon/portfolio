docker build -t portfolio . && docker run -d -p 8080:80 --name portfolio portfolio
docker rm -f portfolio