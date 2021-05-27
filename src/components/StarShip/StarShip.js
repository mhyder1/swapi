//import './StarShip.css';

function StarShip(props) {
  return (
    <div className="star-ship-container" style={styles.card}>
      
        <h1>StarShip</h1>
        <p>Name: { props.starshipDataProps.name}</p>
    </div>
  );
}

export default StarShip;


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