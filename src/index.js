require('./styles.scss');
var data = {
    title: 'none',
    artist: ['none'],
    error: true,
    id: 'none',
    uri: 'none'
};
fetch('https://spotify-auth-renabil.herokuapp.com/token/refresh')
    .then(function (r) { return r.json(); })
    .then(function (d) {
    var token = d.access_token;
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': "Bearer " + token
        }
    })
        .then(function (r) {
        if (r.status !== 200) {
            data = {
                title: 'none',
                artist: ['none'],
                error: true,
                id: 'none',
                uri: 'none'
            };
        }
        else {
            return r.json();
        }
    })
        .then(function (d) {
        data = {
            title: d.item.name,
            artist: d.item.artists,
            error: false,
            id: d.item.id,
            uri: d.item.uri,
            album_id: d.item.album.id
        };
        fetch("https://api.spotify.com/v1/albums/" + data.album_id, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
            .then(function (r) { return r.json(); })
            .then(function (d) {
            data['image'] = d.images[0].url;
            render();
        });
    });
});
function render() {
    document.getElementById('root').innerHTML = "\n        <div id=one >\n            <img src=" + data.image + "></img>\n        </div>\n\n        <div id=two >\n            <h1>" + data.title + "</h1>\n            <p>By " + data.artist[0].name + "</p>\n\n            <br>\n            \n            <a href=https://open.spotify.com/track/" + data.id + ">Open In Spotify</a>\n        </div>\n\n        <h6>This page shows the song that I'm currently playing on Spotify</h6>\n    ";
}
