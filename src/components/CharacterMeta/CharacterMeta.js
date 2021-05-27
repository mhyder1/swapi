//import './CharacterMeta.css';

function CharacterMeta(props) {
  
  return (
    <div className="character-meta-container" style={styles.card} >
        <h1>Character</h1>
        <p>Name: {props.CharacterMetaData.name}</p>
        <p> Hair Color: {props.CharacterMetaData.hair_color}</p>
        <p> Height: {props.CharacterMetaData.height}</p>  
    </div>
  );
}

export default CharacterMeta;


const styles = {
  card: {
    padding: '1%',
    background: "#eee",
    borderRadius: '25px',
    display: 'inlineBlock',
    height: '50%',
    margin: 'auto',
    position: 'relative',
    width: '50%',
    border: '5px white solid'
  }
}