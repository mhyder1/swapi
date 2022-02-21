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

    //this.props.dispatch({type: "ADD_FETCHED_DATA", payload: data})
  }

    async fetchData() {
      console.log('hello')
    try {
      let swapi_url = "https://swapi.dev/api/people/22/";

      const response = await axios.get(swapi_url);
      const responsefilms = await axios.get(response.data.films[0]);
      const responseStarship = await axios.get(response.data.starships[0]);
      console.log(responsefilms)
      const payload = {

      }

      // this.props.dispatch({type: "ADD_FETCHED_DATA", payload: data})

      // this.setState({
      //   ...this.state,
      //   characterMeta: response.data,
      //   films: responsefilms.data,
      //   starshipData: responseStarship.data,
      // });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.props);
    return (
      <Grid container spacing={2} className="profile-container">
        <Grid item xs={6}>
          <div className="img-container">
            <ProfilePicture />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="info-container">
            {/* <CharacterMeta CharacterMetaData={this.props.characterMeta} />
            <StarShip starshipDataProps={this.props.starshipData} />
            <Films filmsData={this.props.films} /> */}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films,
    starshipData: state.starships,
    characterMeta: {
      name: state.name,
      hair_color: state.hair_color,
      height: state.height,
    },
  };
};

export default connect(mapStateToProps)(Profile);
