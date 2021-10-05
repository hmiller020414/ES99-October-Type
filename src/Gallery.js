import React from 'react'
import DailyInfo from './DailyInfo.js'
import SingleDay from './SingleDay.js'

export default function Gallery() {
    let galleryDetails = DailyInfo.map((singleDay, idx) => {
        return (
            <SingleDay key={idx} {...singleDay} />
        )
    })

    return (
        <div className="Gallery">
            <ul className="Gallery-ul">
                {galleryDetails}
            </ul>
        </div>
    )
}
