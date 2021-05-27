//import './Films.css';

function Films(props) {
  return (
    <div className="films-container">
      
        <h1>Films</h1>
       <p>Film title: {props.filmsData.title} </p>
    </div>
  );
}

export default Films;
