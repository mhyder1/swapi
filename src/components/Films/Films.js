//import './Films.css';

function Films(props) {
  return (
    <div className="films-container" style={styles.card}>
      
        <h1>Films</h1>
       <p>Film title: {props.filmsData.title} </p>
    </div>
  );
}

export default Films;


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