import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import "./Profile.css";
//components
import CharacterMeta from "../CharacterMeta/CharacterMeta";
import StarShip from "../StarShip/StarShip";
import Films from "../Films/Films";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { fetchData } from "../actions";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

/**
 * fetch in the library pull up data into the profile
 * once you do the dispatch - and you do the mapStateToProps function to
 * move the setState into componentDidMount (put the payload into componentDidMount)
 * do all the mapStateProps into the setState
 */

const mapStateToProps = (state) => {
  return {
    films: state.films,
    starshipData: state.starships,
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterMeta: {},
      films: {},
      starshipData: {},
    };
  }

  // componentDidMount() {
  //   fetchData();
  //   // console.log("only run once");
  //   // this.setState()
  // }

  // mapDispatchToProps(dispatch) {
  //   return {
  //     addArticle: article => dispatch(addArticle(article))
  //   }
  // }

  // async fetchData() {
  //   console.log("Async message ");
  //   try {
  //     let swapi_url = "https://swapi.dev/api/people/22/";

  //     const response = await axios.get(swapi_url);
  //     //response.data.films
  //     const responsefilms = await axios.get(response.data.films[0]);
  //     const responseStarship = await axios.get(response.data.starships[0]);
  //     //setState for all keys
  //     this.setState({
  //       ...this.state,
  //       characterMeta: response.data,
  //       films: responsefilms.data,
  //       starshipData: responseStarship.data,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

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
            <CharacterMeta CharacterMetaData={this.state.characterMeta} />
            <StarShip starshipDataProps={this.state.starshipData} />
            <Films filmsData={this.state.films} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Profile);
