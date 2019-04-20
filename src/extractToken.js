function extractToken(){
    let url = document.URL

    if(url.includes('access_token')){
        return url.split('#')[1].split('=')[1].split('&')[0]
    }else{
        return false
    }
}

export default extractToken