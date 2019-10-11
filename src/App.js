import React from 'react';
// import logo from './logo.svg';
import './App.css';
import API from './adapters/API';
import Map from './components/Map.js'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }


  componentDidMount() {
    API.fetchData()
      .then(data => this.setState({
        data: data
      }))
  }

  render(){
    const data = this.state.data.drivers
    const defaultPosition = {lat: 51.5049375, lng: -0.0964509}
    console.log(data)
    return (
      <div className="App">
        <div className='map'>
          <Map 
            drivers={this.state.data.drivers}
            defaultPosition = {defaultPosition}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=
            AIzaSyCXQzTXrGwuxfamzuN0L6JdjYFZMznaO0w
            "
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `50vh`, width: '80vw' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }

}

export default App;
