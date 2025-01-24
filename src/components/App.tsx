import { Layout } from "./Layout/Layout";
import { Main } from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsList } from "./FilmsList/FilmsList";
import { useState } from "react"
import { Header } from "./Header/Header";
import { AnnouncementList} from "./AnnouncementList/AnnouncementList"
import { FilmPage } from "./FilmPage/FilmPage";



export function AppComponent(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                     <Route path="/main" element={<Main></Main>}></Route>
                    <Route 
                            path="/film/:id"
                            element={<FilmPage></FilmPage>}
                    ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}