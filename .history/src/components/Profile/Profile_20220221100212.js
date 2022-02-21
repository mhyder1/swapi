import React from "react";
import "./Profile.css";
//components
import CharacterMeta from "../CharacterMeta/CharacterMeta";
import StarShip from "../StarShip/StarShip";
import Films from "../Films/Films";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
// import { fetchData } from "../actions";
import axios from 'axios'
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

/**
 * fetch in the library. pull up data into the profile
 * once you do the dispatch - and you do the mapStateToProps function to
 * move the setState into componentDidMount (put the payload into componentDidMount)
 * do all the mapStateProps into the setState
 */

class Profile extends React.Component {
  componentDidMount() {
    this.fetchData()
  }

    async fetchData() {
      console.log('hello')
    try {
      let swapi_url = "https://swapi.dev/api/people/22/";

      const response = await axios.get(swapi_url);
      const responsefilms = await axios.get(response.data.films[0]);
      const responseStarship = await axios.get(response.data.starships[0]);
      const payload = {
        films: { title: responsefilms.data.title },
        starshipData: { name: responseStarship.data.name },
        characterMeta: {
          name: response.data.name,
          hair_color: response.data.hair_color,
          height: response.data.height
        }
      }

      this.props.dispatch({type: "ADD_FETCHED_DATA", payload})
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Grid container spacing={2} className="profile-container">
        <Grid item xs={6}>
          <div className="img-container">
            <ProfilePicture />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="info-container">
            <CharacterMeta CharacterMetaData={this.props.characterMeta} />
             <StarShip starshipDataProps={this.props.starshipData} />
            <Films filmsData={this.props.films} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    films: state.films,
    starshipData: state.starshipData,
    characterMeta: state.characterMeta
  };
};

export default connect(mapStateToProps)(Profile);
