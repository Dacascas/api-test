# Api for set future message
Api for set timeout of future message (redis as database)

## Technology
* js
* nodejs
* redis

## API
POST http://localhost:3000/echoAtTime with
json/application header
raw body example:
{
   "time":1518036748122,
   "message":"new message"
}

## Running
Install redis-server localy with command like that in Ubuntu
`apt-get install redis-server`
Start redis server localy
`redis-server`
For running dev server:

`npm run start-dev`