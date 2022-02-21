//import './CharacterMeta.css';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function CharacterMeta(props) {
  console.log(props);

  return (
    <Card className="character-meta-container">
      <h1>Character</h1>
      <p>Name: {props.CharacterMetaData.name}</p>
      <p> Hair Color: {props.CharacterMetaData.hair_color}</p>
      <p> Height: {props.CharacterMetaData.height} cm</p>
    </Card>
  );
}

export default CharacterMeta;
