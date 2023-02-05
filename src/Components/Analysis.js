import React from 'react';

import './analysis.css';

const userData = require('./userDetails.json')
const trackData = require('./trackDetails.json')["items"]
const artistData = require('./artistDetails.json')["items"]
const user_name = userData["display_name"]
console.log(artistData)

const prepareArtistElements = (artists) => {
    let itemsPerRow = 5
    let size = artists.length
    let rows = size / itemsPerRow
    const preparedArray = []
    for (let i = 0; i <= rows; i++) {
        let row = []
        for (let j = 0; j < itemsPerRow && (i * itemsPerRow + j < size); j++) {
            let item = (
                <div className='artist-container'>
                    <div className='artist-photo'>
                        <img src={artists[i * itemsPerRow + j].images[2].url} />
                    </div>
                    <div className='artist-name'>
                        {artists[i * itemsPerRow + j].name}
                    </div>
                </div>
            )
            row.push(item)
        }
        preparedArray.push(<div className='artist-row'>{row}</div>)
    }

    return preparedArray
}

const prepareTrackElements = (tracks) => {
    let itemsPerRow = 5
    let size = tracks.length
    let rows = size / itemsPerRow
    const preparedArrayT = []
    for (let i = 0; i <= rows; i++) {
        let row = []
        for (let j = 0; j < itemsPerRow && (i * itemsPerRow + j < size); j++) {
            let item = (
                <div className='track-container'>
                    <div className='track-photo'>
                        <img src={tracks[i * itemsPerRow + j].album.images[1].url} />
                    </div>
                    <div className="data">
                        <div className='track-name'>
                            {tracks[i * itemsPerRow + j].name}
                        </div>
                        <div className='artist-names'>
                            {tracks[i * itemsPerRow + j].artists[0].name}
                        </div>
                    </div>
                </div>
            )
            row.push(item)
        }
        preparedArrayT.push(<div className='track-row'>{row}</div>)
    }
    // console.log(preparedArrayT)
    return preparedArrayT
}

const prepareTopGenre = (artists) => {
    let genres = {};
    artists.map((artist, i) => {
        console.log("Genre length for " + i + "th artist -> ", artist.genres.length)
        artist.genres.map((genre) => {
            if (`${genre}` in genres) {
                genres[`${genre}`] = genres[`${genre}`] + 1;
            } else {
                genres[`${genre}`] = 1;
            }
        })
    })

    let b = Object.keys(genres).sort(function (a, b) { return genres[a] - genres[b] }).reverse()
    console.log(b)

    console.log([b[0], b[1], b[2]])
    let row = []
    row.push(<div className='genre-container'>{b[0]}</div>)
    row.push(<div className='genre-container'>{b[1]}</div>)
    row.push(<div className='genre-container'>{b[2]}</div>)
    return <div className='top-3'> {row} </div>  // returning top 3 genres of the user
}

function Analysis() {


    const artists = prepareArtistElements(artistData)
    const tracks = prepareTrackElements(trackData)
    const topGenres = prepareTopGenre(artistData)

    return (
        <div className='analysis-page'>
            <h2> Hey {user_name}... :) </h2>
            <p> Your top artists are </p>
            <div className='top-artists'>
                {artists}
            </div>
            <p> Your top songs are </p>
            <div className='top-tracks'>
                {tracks}
            </div>
            <p> Your top 3 genres are </p>
            <div className='top-genres'>
                {topGenres}
            </div>
        </div>
    )
}

export default Analysis