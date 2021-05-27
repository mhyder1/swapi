//import './StarShip.css';

function StarShip(props) {
  return (
    <div className="star-ship-container">
      
        <h1>StarShip</h1>
        <p>Name: { props.starshipDataProps.name}</p>
    </div>
  );
}

export default StarShip;
