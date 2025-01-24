import { useState } from "react"

import "./Film.css"
import { Link } from "react-router-dom"

interface IFilmProps{
    id: number
    name: string
    genre: string
    img: string
}

export function Film(props: IFilmProps){
    return( 
        <Link to={`/film/${props.id}`}>
            <div className="Film">
                <img src={props.img} alt="aboba" className="film-image"/>
                <div className="film-text-div">
                    <p className="name">{props.name}</p>
                </div>
            </div>
        </Link>
    )
}