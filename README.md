# Loopback app on Google App Engine
This repo demonstrates how to run and host a loopback app on Google App Engine.

* [Run Locally](#run-locally)
* [Deploying](#deploying)

## Run the hosted app on Google App Engine
* I modelled the Spotify api. Spotify is an online music service that gives you instant access to millions of songs – from old favorites to the latest hits.

* To test the APIs, use Postman.

I created three models for this demo `Albums`, `Tracks` and `Artists`.

* Albums Model Structure
```sh
    "artists": [{}],
    "album_type": "",
    "image": "",
    "tracks": [{}],
    "release_date": ""
```
* Tracks Model Structure
```sh
        "artists": [{}],
        "albums": [{}],
        "duration": "",
        "image": "",
        "name": ""
```
* Artists Model Structure
```sh
    "name": "",
    "popularity": "",
    "genres": [{}],
    "image": ""
```
## API Summary

#### Note

All requests must be suffixed with  **loopback-app.appspot.com/api/**

## Albums

EndPoint | Functionality
-------- | -------------
POST /albums/ | Creates a new album instance.
GET /albums/ | Returns all albums.
GET /albums/<id> | Returns the specified album id.
PUT /albums/<id> | Update album attributes.
DELETE /albums/<id> | Delete album.

## Tracks

EndPoint | Functionality
-------- | -------------
POST /tracks/ | Creates a new track instance.
GET /tracks/ | Returns all tracks.
GET /tracks/<id> | Returns the specified track id
PUT /tracks/<id> | Update track attributes.
DELETE /tracks/<id> | Delete track.

## Artists

EndPoint | Functionality
-------- | -------------
POST /artists/ | Creates a new artist instance.
GET /artists/ | Returns all artists.
GET /artists/<id> | Returns the specified artist id.
PUT /artists/<id> | Update artist attributes.
DELETE /artists/<id> | Delete artist.


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
