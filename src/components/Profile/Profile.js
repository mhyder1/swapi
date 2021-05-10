import React from 'react';
import ReactDOM from 'react-dom';
//import './Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
      super(props);
       
      };
    
    componentDidMount() {
      // Subscribe to changes
   //   DataSource.addChangeListener(this.handleChange);
    }
  
   
    handleChange() {
      // Update component state whenever the data source changes
    //   this.setState({
    //     comments: DataSource.getComments()
    //   });
    }
  
    render(){
      return (
        <div className="profile-container" >
          <h1>Profile</h1>
        </div>
      ); 
    }
}