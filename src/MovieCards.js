export default function TitleName(){
        return(
            <div>
            <h1 className="heading">MOVIE CARDS</h1>
            </div>
        );
    }


export function MovieCard(inputinfo){
        const {title , year, Genre , info, movieimglink} = inputinfo;
        return(
            <div className="CardsContainer">
            <div className="Cards">
                <h1 className="MovieTitle">{title}</h1>
                <span className="MovieYear">{year}</span>
                <span className="MovieGenre">{Genre}</span><br/><br/>
                <span className="MovieInfo">{info}</span>
            </div>
            </div>
        );
    }
