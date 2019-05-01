// import './styles.scss'


// fetch('https://spotify-auth-renabil.herokuapp.com/token/refresh')
// .then(r => r.json())
// .then(d => {
//     let token:string = d.access_token

//     fetch('https://api.spotify.com/v1/me/player/currently-playing', {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(r => {
//         if(r.status !== 200){
//             data = {
//                 title: 'none',
//                 artist: ['none'],
//                 error: true,
//                 id: 'none',
//                 uri: 'none',

//             }
//         }else{
//             return r.json()
//         }
//     })
//     .then(d => {

//         data = {
//             title: d.item.name,
//             artist: d.item.artists,
//             error: false,
//             id: d.item.id,
//             uri: d.item.uri,
//             album_id: d.item.album.id,
//         }

        
//     fetch(`https://api.spotify.com/v1/albums/${data.album_id}`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(r => r.json())
//     .then(d => {
//         data['image'] = d.images[0].url

//         render()
//     })

//     })
// })

// function render(){
//     if(data.error){
//         document.getElementById('root').innerHTML = `
//         <div id=two >
//             <h1>None</h1>
//             <p>None</p>
//         </div>

//         <h6>This page shows the song that I'm currently playing on Spotify</h6>
//     `
//     }else{
//         document.getElementById('root').innerHTML = `
//         <div id=one >
//             <img src=${data.image}></img>
//         </div>

//         <div id=two >
//             <h1>${data.title}</h1>
//             <p>By ${data.artist[0].name}</p>

//             <br>
            
//             <a href=https://open.spotify.com/track/${data.id}>Open In Spotify</a>
//         </div>

//         <h6>This page shows the song that I'm currently playing on Spotify</h6>
//     `
//     }
// }