import React from 'react';
import ReactDOM from 'react-dom';
//import './Profile.css';

//components
import CharacterMeta from '../CharacterMeta/CharacterMeta'
//import CharacterMeta from '../CharacterMeta/CharacterMeta'
//import CharacterMeta from '../CharacterMeta/CharacterMeta'
//import CharacterMeta from '../CharacterMeta/CharacterMeta'
//import CharacterMeta from '../CharacterMeta/CharacterMeta'

export default class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      // "DataSource" is some global data source
      // characterMeta:  example,
      // films:  example,
      // starShip: example,
       

      }
      }
    
    componentDidMount() {
      // Subscribe to changes
      //   DataSource.addChangeListener(this.handleChange);
    }; 
  
   
    handleChange() {
    // Update component state whenever the data source changes
    //   this.setState({
    //     films: someDataSource
    //   });
    }; 
  
    render(){
      return (
        <div className="profile-container">
          <h1>Profile</h1>
          <CharacterMeta/>
        </div>
      ); 
    }
}
