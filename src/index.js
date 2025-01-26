import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import TitleName, {MovieCard} from './MovieCards'
import './index.css'

root.render(
    <>
    <TitleName/>
    <MovieCard title="DEADPOOL" year="( 2016 )" Genre="Action, Adventure , Sci-fi "/>
    <MovieCard title= "SUPERMAN" year="( 2014 )" Genre="Action, Adventure , Sci-fi , Fantasy"/>
    </>
);