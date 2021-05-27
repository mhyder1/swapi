//import './CharacterMeta.css';

function CharacterMeta(props) {
  
  return (
    <div className="character-meta-container">
        <h1>Character</h1>
        <p>Name: {props.CharacterMetaData.name}</p>
        <p> Hair Color: {props.CharacterMetaData.hair_color}</p>
        <p> Height: {props.CharacterMetaData.height}</p>  
    </div>
  );
}

export default CharacterMeta;
