import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import TitleName, {MovieCard} from './MovieCards'
import './index.css'

root.render(
    <>
    <TitleName/>
    <MovieCard title="DEADPOOL" year="( 2016 )" Genre="Action, Adventure , Sci-fi " info="A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks."/>
    <MovieCard title= "SUPERMAN" year="( 1978 )" Genre="Action, Adventure , Sci-fi , Fantasy" info="An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero."/>
    </>
);