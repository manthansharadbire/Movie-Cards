import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

import Greeting from './MovieCards'
import { GreetingInfo } from "./MovieCards";

root.render(
    <>
    <Greeting/>
    <GreetingInfo name = "Manthan" city = "Nagpur"/>
    </>
);