import { useEffect } from "react"

export function Test(){
    useEffect(() => {

        async function fetchBD() {
                const response = await fetch(`http://localhost:5000/list`)
                const productData = await response.json()
        }
        fetchBD()
    },)
    return(
        <div>100</div>
    )
}


