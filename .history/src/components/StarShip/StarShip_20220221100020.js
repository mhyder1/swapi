//import './StarShip.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function StarShip(props) {
   console.log(props)
  const films = [
    { id: 1, name: "Empire Strikes Back" },
    { id: 2, name: "Attack of the Clones" }
  ];
  return (
    <Card className="star-ship-container" >
        <h1>StarShip</h1>
        <p>Name: {props.starshipDataProps.name}</p>
        <h2>Films Slave 1 was seen in </h2>
        <CardContent>
        { 
        films.map(movies => {
         return <p key={movies.id} >{movies.name}</p> 
        })   
        }
         </CardContent>
    </Card>
  );
}

export default StarShip;

 