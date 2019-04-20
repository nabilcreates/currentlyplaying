import extractToken from './extractToken.js'

let token = extractToken()

if(token !== false){
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(r => r.json())
    .then(json => {
        console.log(json)
        document.getElementById('title').innerHTML = json.item.name
        document.getElementById('artist').innerHTML = json.item.artists[0].name
    })
}else{
    document.getElementById('authlink').style.display = 'block'
}