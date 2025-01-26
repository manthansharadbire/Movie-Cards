export default function TitleName(){
        return(
            <div>
            <h1 className="heading">Movie Cards</h1>
            </div>
        );
    }


export function MovieCard(inputinfo){
        const {title , year, Genre , movieinfo } = inputinfo;
        return(
            <div className="CardsContainer">
            <div className="Cards">
                <h1>{title}</h1>
                <span className="MovieYear">{year}</span>
                <span className="MovieGenre">{Genre}</span>
            </div>
            </div>
        );
    }
