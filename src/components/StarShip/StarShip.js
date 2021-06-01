//import './StarShip.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function StarShip(props) {
  return (
    <Card className="star-ship-container">
        <h1>StarShip</h1>
        <p>Name: { props.starshipDataProps.name}</p>
    </Card>
  );
}

export default StarShip;

 