import React, { Component } from 'react';

class MusicIntro extends Component {

    componentDidMount() {
        const song = document.getElementById('song');
        setTimeout(() => {
            song.play();
        }, 5000);
    }

    render() {
        return (
            <audio id="song" src="https://www.thesoundarchive.com/starwars/star-wars-theme-song.mp3"></audio>
        )
    }
}

export default MusicIntro