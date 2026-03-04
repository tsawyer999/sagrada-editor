docker stop sagrada-editor-app
docker rm -f sagrada-editor-app
docker build --no-cache -t sagrada-editor ..
docker run -d -p 8080:80 --name sagrada-editor-app sagrada-editor
