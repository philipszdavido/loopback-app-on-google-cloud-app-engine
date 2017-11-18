module.exports = function(app) {
    app.dataSources.mongodb.automigrate('Albums', function(err) {
        if (err) throw err;

        app.models.Albums.create([{
            name: 'Luke Skywalker',
            artists: [{}],
            album_type: 'Pop',
            image: 'Male',
            tracks: [{}],
            release_date: "2017"
        }, {
            name: 'C-3PO',
            artists: [{}],
            album_type: 'Pop',
            image: 'Male',
            tracks: [{}],
            release_date: "2017"
        }], function(err, Artists) {
            if (err) throw err;

            console.log('Models created: \n', Artists);
        });
    });

    app.dataSources.mongodb.automigrate('Tracks', function(err) {
        if (err) throw err;

        app.models.Tracks.create([{
            name: 'A New Hope',
            image: 'It is a period of civil war',
            duration: 8989,
            albums: [{}],
            artists: [{}]
        }, {
            name: 'Chidume Nnamdi',
            image: 'It is a period of civil warr',
            duration: 989,
            albums: [{}],
            artists: [{}]
        }], function(err, Tracks) {
            if (err) throw err;

            console.log('Models created: \n', Tracks);
        });
    });

    app.dataSources.mongodb.automigrate('Artists', function(err) {
        if (err) throw err;

        app.models.Artists.create([{
            name: 'Death Star',
            popularity: 5,
            genres: [{ name: 'Imperial Department of Military Research' }],
            image: '843342'
        }, {
            name: 'Sentinel-class landing craft',
            popularity: 90,
            genres: [{ name: 'Imperial Department of Military Research' }],
            image: '75'
        }], function(err, Albums) {
            if (err) throw err;

            console.log('Models created: \n', Albums);
        });
    });

};