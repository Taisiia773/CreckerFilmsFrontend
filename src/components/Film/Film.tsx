import { useState } from "react"

import "./Film.css"

interface IFilmProps{
    name: string
    category: string
    img: string
}

export function Film(props: IFilmProps){
    return( 
        <div className="Film">
            <img src={props.img} alt="aboba" className="film-image"/>
            <div className="film-text-div">
                <p className="name">{props.name}</p>
            </div>
        </div>
    )
}