//import './Films.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function Films(props) {
  console.log(props)
  return (
    <Card className="films-container" >
        <h1>Films</h1>
       <p>Film title: {props.filmsData.title} </p>
    </Card>
  );
}

export default Films;
 