# BlogOn
BlogOn is a platform for blog hosting web application. The purpose of this project was to learn integration of [node](https://nodejs.org/), [express](http://expressjs.com/), [angular](https://angularjs.org/) and [elasticsearch](https://www.elastic.co/) in single application.
Frontend is written using ejs and angularjs, backend is written with express and nodejs with elasticsearch serving as database.
User authentication is done using [passport](http://passportjs.org/).

**The same app is deployed on heroku with blog submit feature disabled.**
https://blogon-mishraji.herokuapp.com/

## Installation
### Requirements
* [nodejs](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* curl (optional)

### Install application

* clone this repo in local directory
* browse to the directory
* run `npm install`
  this will install required modules in node_modules folder and run bower to install bower components in public/lib folder

## Elasticsearch
### Install Elasticsearch
Download and install elasticsearch 2.1 from following link
https://www.elastic.co/downloads/past-releases/elasticsearch-2-1-0

### Run Elasticsearch
* (optional) change cluster name in `config/elasticsearch.yml` to something unique
* Go to elastic folder and run `sh bin/elsticsearch` to start ES

### Populate ES with dummy data
* Run `sh populateES.sh` to create index, mappings and populate dummy data
* Verify using curl
`curl -XGET 'http://localhost:9200/'`
should see something like this
```
{
  "name" : "Nandi",
  "cluster_name" : "MishraJi_cluster2",
  "version" : {
   "number" : "2.1.1",
    "build_hash" : "40e2c53a6b6c2972b3d13846e450e66f4375bd71",
    "build_timestamp" : "2015-12-15T13:05:55Z",
    "build_snapshot" : false,
    "lucene_version" : "5.3.1"
  },
  "tagline" : "You Know, for Search"
}
```

## Run the app
run using `node server.js`
or using gulp `gulp serve`

There is no encryption used in the application, username and password are stored in plain text.

