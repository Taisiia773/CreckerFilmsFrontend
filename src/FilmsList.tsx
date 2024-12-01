import { Film } from "./Film"
import "./FilmsList.css"

export function FilmsList(){
    const films = [
        {
            name: "Дэдпул и Росомаха",
            img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
            id: 0
        },
        {
            name: "Дэдпул и Росомаха",
            img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
            id: 1
        },
        {
            name: "Дэдпул и Росомаха",
            img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
            id: 2
        },
        {
            name: "Дэдпул и Росомаха",
            img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
            id: 3
        },
    ]
    return (
        <div className="films">
            {films.map((film) => {
                return <Film 
                        img={film.img}
                        name={film.name}
                        key={film.id} />
            })}
        </div>
    )
}
