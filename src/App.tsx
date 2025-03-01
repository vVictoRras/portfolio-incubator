import './App.css'

import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sectoins/main/Main.tsx";
import {Skills} from "./layout/sectoins/skills/Skills.tsx";
import {Works} from "./layout/sectoins/works/Works.tsx";
import {Testimony} from "./layout/sectoins/testimony/Testimony.tsx";
import {Contact} from "./layout/sectoins/contact/Contact.tsx";
import {Slogan} from "./components/slogan/Slogan.tsx";
import {Footer} from "./components/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    )
}

export default App

