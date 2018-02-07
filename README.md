# Api for set future message
Api for set timeout of future message (redis as database)

## Technology
* js

## API
POST http://localhost:3000/echoAtTime with
json/application header
raw body example:
{
   "time":1518036748122,
   "message":"new message"
}

## Running
For running dev server:

`npm run start-dev`