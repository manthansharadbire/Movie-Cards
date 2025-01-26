export default function Greeting(){
        return(
            <div>
            <h1>Hello Friends</h1>
            </div>
        );
    }


export function GreetingInfo(props){
        const {name , city } = props;
        return(
            <div>
            <h1>I am {name} from {city}.</h1>
            </div>
        );
    }