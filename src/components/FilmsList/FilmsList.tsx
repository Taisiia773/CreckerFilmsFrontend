import {useState, useEffect} from 'react'
import { Film } from "../Film/Film"
import "./FilmsList.css"

const films = [
    {
        name: "Дэдпул и Росомаха",
        category:"boss fimoz",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 0
    },
    {
        name: "Дэдпул и Росомаха",
        category:"monster abayudno",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 1
    },
    {
        name: "Дэдпул и Росомаха",
        category:"Serega Pirate",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 2
    },
    {
        name: "Дэдпул и Росомаха",
        category:"papa wildberries",
        img: "https://static.hdrezka.ac/i/2024/10/1/wcc0cad3b0584zr82h94s.jpg",
        id: 3
    },
]

export function FilmsList(){
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [FilteredFilms, setFilteredFilms] = useState(films)
    useEffect(() => {
        console.log(selectedCategory)
        if (selectedCategory === "All") {
            setFilteredFilms(films)
        } else {
            const filtered = films.filter((film) => {
                return film.category === selectedCategory
            })
            setFilteredFilms(filtered)
        }
    }, [selectedCategory])

    return (
        <div className="films">
            <div className="filter">
                <select className="SelectCategories" onChange={(event) => {
                    const selectedValue = event.target.value
                    setSelectedCategory(selectedValue)
                }}>
                    <option value="All">All</option>
                    <option value="boss fimoz">boss fimoz</option>
                    <option value="monster abayudno">monster abayudno</option>
                    <option value="Serega Pirate">Serega Pirate</option>
                    <option value="papa wildberries">papa wildberries</option>
                </select>
            </div>
            <section className='FilmsList-section'>
                {FilteredFilms.map((film) => {
                    return <Film 
                            img={film.img}
                            category={film.category}
                            name={film.name}
                            key={film.id} />
                })}
            </section>
        </div>
    )
}
