#### Reference: 

+ https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

##### Run node api outside the container
+ yarn install
+ yarn start

##### Build image
+ docker build . -t test-node
+ [-t for tag]

##### Run image
+ docker run -p 3000:3000 -d test-node
+ [-p: port binding], [-d: detached mode]
+ docker mapped port 3000 inside the container to port 3000 on your machine

##### Test using curl
curl -i localhost:3000

##### Development log
+ yarn add config
+ yarn add winston

+ External endpoint: https://api.weather.gov/alerts/active?area=MA




