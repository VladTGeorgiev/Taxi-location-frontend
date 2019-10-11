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
    // const d = data.map(el=><div>{el}</div>)
    console.log(data)
    return (
      <div className="App">
        <header className="App-header">
          {/* {data === undefined ? <div>No data</div> : data.map(el=><div key={el.driver_id}>{el.driver_id}</div>)} */}

        </header>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=???????????????????????????????????"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }

}

export default App;
