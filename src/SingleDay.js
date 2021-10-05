import React from 'react'

const SingleDay = ({image, letter, date, artist, team}) => {
    return (
        <li className="SingleDay">
            <div className="SingleDay-image">
                <img src={image} alt={`${artist}'s design for ${date}`} />
            </div>
            <div className="SingleDay-copy">
                <p className="SingleDay-prompt">{letter} | {date}</p>
                <p className="SingleDay-artist">{artist}, {team}</p>
            </div>
        </li>
    )
}

export default SingleDay;