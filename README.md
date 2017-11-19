# Loopback app on Google App Engine
This repo demonstrates how to run and host a loopback app on Google App Engine.

I modelled the Spotify Web API. Spotify is an online music service that gives you instant access to millions of songs – from old favorites to the latest hits.

* [Run Locally](#run-locally)
* [Deploying](#deploying)
* [Web API Object Model](#web-api-object-model)
* [Run the hosted app on Google App Engine](#run-the-hosted-app-on-google-app-engine)
* [API Summary](#api-summary)

## Web API Object Model
I created three models for this demo `Albums`, `Tracks` and `Artists`.

* Albums Model Structure
```sh
    "artists": [{
     name: ""
    }],
    "album_type": "",
    "image": "",
    "tracks": [{
     name: ""
    }],
    "release_date": ""
```
* Tracks Model Structure
```sh
   "artists": [{
    name: ""
   }],
   "albums": [{
    name: ""
   }],
   "duration": "",
   "image": "",
   "name": ""
```
* Artists Model Structure
```sh
    "name": "",
    "popularity": "",
    "genres": [{
     name: ""
    }],
    "image": ""
```
## Run the hosted app on Google App Engine
* Note: I used mlab's Cloud MongoDB service as my datastore.
* Note: All requests must be prefixed with  **loopback-app.appspot.com/api/**

* To test the APIs, use Postman.

* Before you use the Postman, you need to provide the Auth0 Authorization token. Go to the `Header` tab, enter `Authorization` as the key and the following hash as the value.
```sh
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTEwOTIxMiwiZXhwIjoxNTExMTk1NjEyLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.4G7cBvu_bcnbicGZ46T63EOUouu3f252geC9OlM39ZZmIA1IcVUUWwAjzAfb5f9tDy5e0bwkUPsuv_Olkip2O2f0MRDvtmKctTsdqd79zuTygCre2mY8_BzkBl5NqRi-QI7-StZLmBBSo0P6-BDOe3ka2eECkhy735O24nzCPbgYZhsbtsfK2e73loLKuykQUsk-LmNPVvrJjiiPXKEhAfoHwuqOF1_648ilQgLZoi5F695WTUlLQi6KFlDTYqpDJRrl7mATOnRtvhUuD_BTlsDDlh5tbPHZAJgm0G_4D3jKSVzb7kfnG01uXZB8ThqbLq9DRM2hHRdzXH3gSia9JA
```
![Alt text](screenshots/postman_auth_header.png "Title")


### Albums POST Test - This creates a new album
![Alt text](screenshots/albums_post.png "Title")
### Albums GET Test - This retrieves all albums from the database
![Alt text](screenshots/albums_get.png "Title")
### Albums GET <id> Test - This retrieves a specific album id from the database 
![Alt text](screenshots/albums_get_id.png "Title")


### Tracks POST Test - This creates a new track instance.
![Alt text](screenshots/tracks_get_id.png "Title")
### Tracks GET Test - This retrieves all tracks from the database.
![Alt text](screenshots/tracks_get_id.png "Title")
### Tracks GET <id> Test - This retrieves a specific track id from the database.
![Alt text](screenshots/tracks_get_id.png "Title")

### Artists POST Test - This creates a new artist instance.
![Alt text](screenshots/artists_get_id.png "Title")
### Artists GET Test - This retrieves all artists from the database.
![Alt text](screenshots/artists_get_id.png "Title")
### Artists GET <id> Test - This retrieves a specific artist id from the database 
![Alt text](screenshots/artists_get_id.png "Title")

## API Summary

#### Note

All requests must be prefixed with  **loopback-app.appspot.com/api/**

## Albums

EndPoint | Functionality
-------- | -------------
POST /albums/ | Creates a new album instance.
GET /albums/ | Returns all albums.
GET /albums/`<id>` | Returns the specified album id.
PUT /albums/`<id>` | Update album attributes.
DELETE /albums/`<id>` | Delete album.

## Tracks

EndPoint | Functionality
-------- | -------------
POST /tracks/ | Creates a new track instance.
GET /tracks/ | Returns all tracks.
GET /tracks/`<id>` | Returns the specified track id
PUT /tracks/`<id>` | Update track attributes.
DELETE /tracks/`<id>` | Delete track.

## Artists

EndPoint | Functionality
-------- | -------------
POST /artists/ | Creates a new artist instance.
GET /artists/ | Returns all artists.
GET /artists/`<id>` | Returns the specified artist id.
PUT /artists/`<id>` | Update artist attributes.
DELETE /artists/`<id>` | Delete artist.


## Run Locally

1.  [Setup your environment for Node.js developement][nodejs_dev].
1.  [Install the Google Cloud SDK][sdk].
1.  Acquire local credentials for authenticating with Google Cloud Platform APIs:

        gcloud auth application-default login

1.  Clone this repo:

        git clone https://github.com/philipszdavido/loopback-app-on-google-cloud-app-engine.git

1.  Move into the `loopback-app-on-google-cloud-app-engine` directory from the terminal:

        cd loopback-app-on-google-cloud-app-engine

1.  Install depedencies using `npm` or `yarn`:

        npm install

    or

        yarn install

1.  Run the sample with `npm` or `yarn`:

        npm start

    or

        yarn start

1.  Visit the application at `http://localhost:8080`.

## Deploying

1.  Use the [Google Cloud Console][console] to create a Google Cloud Platform
    project.
1.  [Enable billing][billing] for your project.

1.  Use the Cloud SDK to deploy your app.

        gcloud app deploy

    Note: If there is a `yarn.lock` file then `yarn install` will be used during
    deployment. Delete the `yarn.lock` file to fall back to `npm install`.

1.  View your deployed application at `https://YOUR_PROJECT_ID.appspot.com` or `gcloud app browse`.

[nodejs]: https://nodejs.org/
[appengine]: https://cloud.google.com/appengine/docs/flexible/nodejs/
[nodejs_dev]: https://cloud.google.com/community/tutorials/how-to-prepare-a-nodejs-dev-environment
[sdk]: https://cloud.google.com/sdk/
[console]: https://console.cloud.google.com
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[official_samples]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine
[community_samples]: https://cloud.google.com/community/tutorials/?q=%22Node.js%22
