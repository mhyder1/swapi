import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Profile.css';
//components
import CharacterMeta from '../CharacterMeta/CharacterMeta'
import StarShip from '../StarShip/StarShip'
import Films from '../Films/Films'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterMeta: {},
      films: {},
      starshipData: {}
    }
  }

  componentDidMount() {

    this.fetchData()
  };  

    
  async fetchData() {
    console.log("Async message ");
    try {

      let swapi_url = "http://swapi.dev/api/people/22/";
      //
      
     
      const response = await axios.get(swapi_url);
      //response.data.films
      const responsefilms = await axios.get(response.data.films[0]);
      const responseStarship = await axios.get(response.data.starships[0]);

      //setState for all keys 
      this.setState({ 
        ...this.state, 
        characterMeta: response.data, 
        films: responsefilms.data, 
        starshipData: responseStarship.data 
      });

    } catch (e) {
      console.log(e);

    }
  };

  render() {
    return (
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="img-container" ><h1>IMAGE CONTAINER</h1></div>
        <div className="info-container" > 
        <CharacterMeta CharacterMetaData={this.state.characterMeta}/>
         <StarShip starshipDataProps={this.state.starshipData} />
         <Films  filmsData={this.state.films} />
        </div>
        
      </div>
    );
  }
}

