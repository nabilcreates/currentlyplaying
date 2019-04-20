function getToken(client_id, redirect_uri, scopes) {
    let u = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token`

    window.location.replace(u)

    console.log(u)
}

export default getToken