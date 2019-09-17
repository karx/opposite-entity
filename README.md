# Opposte Entity using Wikidata

Demo hosted at: [opposite.akriya.co.in](http://opposite.akriya.co.in/get_opposite?latitude=-28.652&longitude=-152.769)

API uses barebones Node.js app using [Express 4](http://expressjs.com/).

![Wikidata](https://upload.wikimedia.org/wikipedia/commons/6/66/Wikidata-logo-en.svg)


## How do we do

```
Given your latitude and longitude, to find the coordinates of the opposite point:
For the latitude, simply change N to S or vice versa; and,
For the longitude, subtract from 180° and change E to W or vice versa (keep in mind when doing this calculation that a minute is 1/60th of a degree, and a second is 1/60th of a minute, and calculate accordingly.)

E.g., the point opposite 40° 21' N 86° 33' W is 40° 21' S 93° 27' E.

If you're using a system which uses signed longitude and latitude (north and east are positive, by convention; south and west are negative), then: take the negative of the latitude; and add 180° to a negative longitude, or subtract 180° from a positive longitude (again remembering minutes and seconds).

```
* Using data from Wikidata


## Read up
*  Lotico
A social network of active Lotico Semantic Web community members, provided as RDF via resolvable URIs and a SPARQL endpoint.

`this existed. why no more info about after '20`

* Host own rdf store of this information about people. Or atleast simulated wikidata information


## Interesting Links
* [https://www.geodatos.net/en/antipodes/india](https://www.geodatos.net/en/antipodes/india)
* [https://en.wikipedia.org/wiki/OGC_GeoSPARQL](https://en.wikipedia.org/wiki/OGC_GeoSPARQL)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.
s
```sh
git clone git@github.com:karx/opposite-entity.git
cd opposite-entity
npm install
npm start
```

Your app should now be running on [localhost:3147](http://localhost:3147/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [10 Habits of a Happy Node Hacker](https://blog.heroku.com/archives/2014/3/11/node-habits)
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)


## Discussion, Support and Issues
For general support and discussion of this project, please join the Discord server: [Discord Invite Link](https://discord.gg/B2cERQ5)

[![Discord Server](https://discordapp.com/api/guilds/552881714196774953/widget.png?style=banner2)](https://discord.gg/B2cERQ5)

To check known bugs and see planned changes and features for this project, please see the GitHub issues.
Found a bug we don't already have an issue for? Please report it in a new GitHub issue with as much detail as you can!


