//import './Films.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axion from 'axios'

function Films(props) {
  return (
    <Card className="films-container" >
        <h1>Films</h1>
       <p>Film title: {props.filmsData.title} </p>
    </Card>
  );
}

export default Films;
 