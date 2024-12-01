import { Layout } from "./Layout"
import { Main } from "./Main"
import { FilmsList } from "./FilmsList"
import { useState } from "react"
import { Header } from "./Header"
import { AnnouncementList} from "./AnnouncementList"


export function AppComponent(){
    return (
        <div>
            <Layout>
                <Header></Header>
                <Main></Main>
            </Layout>
        </div>
    )
}