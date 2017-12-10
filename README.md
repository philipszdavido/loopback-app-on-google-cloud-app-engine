# Loopback app on Google App Engine
This repo demonstrates how to run and host a loopback app on Google App Engine.

I modelled the Spotify Web API. Spotify is an online music service that gives you instant access to millions of songs – from old favorites to the latest hits.

* [Web API Object Model](#web-api-object-model)
* [Run the hosted app on Google App Engine](#run-the-hosted-app-on-google-app-engine)
* [API Summary](#api-summary)
* [Run Locally](#run-locally)
* [Deploying](#deploying)

## Web API Object Model
I created three models for this demo `Albums`, `Tracks` and `Artists`.

* Albums Model Structure
```sh
    "artists": [{
     "name": ""
    }],
    "album_type": "",
    "image": "",
    "tracks": [{
     "name": ""
    }],
    "release_date": ""
```
* Tracks Model Structure
```sh
   "artists": [{
    "name": ""
   }],
   "albums": [{
    "name": ""
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
     "name": ""
    }],
    "image": ""
```
## Run the hosted app on Google App Engine
* Note: I used Google Cloud Firestore service as my datastore.
* Note: All requests must be prefixed with  **loopback-app.appspot.com/api/**

# Albums Tests
### Albums POST Test - This creates a new album
```sh
curl --request POST \
  --url https://loopback-app.appspot.com/api/albums \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA' \
  --header 'content-type: application/json' \
  --data '{"name":"Dangerous","artists":[{"name":"Michael Jackson"}],"album_type":"Pop","image":"michaeljackson.png","tracks":[{"name":"Dangerous"}],"release_date":"1991"}'
```

### Albums GET Test - This retrieves all albums from the database
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/albums \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```

### Albums GET `<id>` Test - This retrieves a specific album id from the database 
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/albums/5a12c7b384a89046c0624bf4 \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```
# Tracks Test
### Tracks POST Test - This creates a new track instance.
```sh
curl --request POST \
  --url https://loopback-app.appspot.com/api/tracks \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA' \
  --header 'content-type: application/json' \
  --data '{"artists":[{"name":"Michael Jackson"}],"albums":[{"name":"Thriller"}],"duration":90,"image":"billiejean.png","name":"Beat It"}'
```
### Tracks GET Test - This retrieves all tracks from the database.
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/tracks \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```
### Tracks GET `<id>` Test - This retrieves a specific track id from the database.
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/tracks/5a12c7b384a89046c0624bf6 \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```
# Artists Test
### Artists POST Test - This creates a new artist instance.
```sh
curl --request POST \
  --url https://loopback-app.appspot.com/api/artists \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA' \
  --data '{"name":"Bob Marley","popularity":90,"genres":[{"name":"Pop"}],"image":"bm.jpg"}'
```
### Artists GET Test - This retrieves all artists from the database.
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/artists \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```
### Artists GET `<id>` Test - This retrieves a specific artist id from the database 
```sh
curl --request GET \
  --url https://loopback-app.appspot.com/api/artists/5a12c7b384a89046c0624bf4 \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVVkdNVVZHTnpNMk9UQTJSRUl3UkRjek5EZzJNekpGTnpneVJETkVSamd3T0VVNVFVVXlRdyJ9.eyJpc3MiOiJodHRwczovL2NoaWR1bWVubmFtZGkuYXV0aDAuY29tLyIsInN1YiI6Iko1SGw3QTgyMW9GczVMTzh4RldUU0FBZHJKQllocjVZQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Nwb3RpZnktYXBwLmNvbSIsImlhdCI6MTUxMTE5MTQ1NywiZXhwIjoxNTExMjc3ODU3LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.hUzpo95mj8XaxxACg_9VbRk5rvkocYaf9rgfWbc5dgtleVVSAHhHGoHVD--GmdJnoTh9rIRZMMpKvhO7iQRGms6CDLUXMzkNfhNdKs0OJIFG1ToVb-8DaoetWIkTNDyt-Djm0N4KKzeTDzw8dXHf9czlafkAKxvLa6LLw6hcQLhGln7_AV8jzG9r_DtxnV2ittTn-cxj04JNANOWbn2VhXigC71SUnqHuUWFWdm6s2eK1fVlSWuNQzMy4DecDkG5mb5CEkQtBMGfAgr7wSJGFsurlpCw1usDG1GrwbD3TenU1xoIYQmWQsNLuuQr6n7EEZxv2pu3QvGOl2xYRw_UUA'
```
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
