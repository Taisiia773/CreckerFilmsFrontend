import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { FilmsList } from "./FilmsList/FilmsList";
import { useState } from "react"
import { Header } from "./Header/Header";
import { AnnouncementList} from "./AnnouncementList/AnnouncementList"


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