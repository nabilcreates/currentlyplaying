import '../styles.scss'
import React from 'react'

import Footer from './Footer'

export default class App extends React.Component{

    constructor(){
        super()
        this.state = {
            title: 'none',
            artist: ['none'],
            error: true,
            id: 'none',
            uri: 'none',
            image: 'none'
        }

        this.getToken()
    }

    getToken(){

        fetch('https://spotify-auth-renabil.herokuapp.com/token/refresh')
            .then(r => r.json())
            .then(d => {
                let token = d.access_token

                this.setState({
                    token: token
                })

                this.getCurrentlyPlayed(token)
            })
        
    }

    getCurrentlyPlayed(token){
        fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(r => {
            let status_code = r.status

            if(status_code == 200){
                return r.json()
            }else{
                this.setState({
                    title: 'none',
                    artist: ['none'],
                    error: true,
                    id: 'none',
                    uri: 'none',
                })
            }
        })
        .then(d => {

            console.log(d)
            
            let data = {
                title: d.item.name,
                artist: d.item.artists,
                error: false,
                id: d.item.id,
                uri: d.item.uri,
                album_id: d.item.album.id,
                album_release_date: d.item.album.release_date,
                image: d.item.album.images[0].url,
                popularity: d.item.popularity,
                preview_url: d.item.preview_url,
            }

            this.setState(data)
            console.log(data)
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>

                {this.state.image !== 'none' && this.state.error !== true ?

                    // Everything is loaded
                    <div id='song' >

                        <img src={this.state.image} ></img>

                        <div id='text' >
                            <h1>{this.state.title}</h1>
                            <p>
                                <i class="fa fa-user" aria-hidden="true"></i> {this.state.artist[0].name}
                            </p>

                            <p>
                                <i class="fa fa-heart" aria-hidden="true"></i> {this.state.popularity}
                            </p>

                            <br></br>
                            
                            <p>Album Released On: {new Date(this.state.album_release_date).toDateString()}</p>


                            <div id='buttons'>
                                <a id='button-spotify' href={`https://open.spotify.com/track/${this.state.id}`} >
                                    <i class="fa fa-spotify" aria-hidden="true"></i> Open In Spotify
                                </a>

                                <a id='button-preview' href={this.state.preview_url} >
                                    <i class="fa fa-headphones" aria-hidden="true"></i> Preview Song
                                </a>
                            </div>

                            <Footer />
                        </div>
                    </div>
                :
                // Everything is not loaded OR Is not listening to any song
                <div>
                    <h1>Hello!</h1>
                    <h3>It's loading, just hold on for awhile</h3>
                    <p>But if it's taking too long... then, I am not listening to any song! Check back later!</p>

                    <Footer />
                </div>
            }
                
            </div>
        )
    }
}