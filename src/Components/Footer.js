import React from 'react';

export default function Footer(props){
    return(
        <h6>This is website shows you what song I am currently playing now on Spotify. This project was created by <a href='https://github.com/renabil/' >me</a> (and it's open-sourced) (v{props.app_version})</h6>
    )
}