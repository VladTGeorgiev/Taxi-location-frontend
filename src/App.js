import React from 'react';
import './App.css';
import { Header, Input, Divider, Label, Button, Icon } from 'semantic-ui-react'
import API from './adapters/API';
import Map from './components/Map.js'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {},
      value: 25
    }
  }

  componentDidMount() {
    API.fetchData()
      .then(data => this.setState({
        data: data
      }))
  }

  refreshData() {
    API.requestUpdate()
      .then(data => this.setState({
        data: data
      }))
  }

  handleChange = e => {this.setState( {value: e.target.value} )}

  reduceNumberOfDrivers = () => {
    if(this.state.value > 1){
      this.setState({value: parseInt(this.state.value) - 1})
    } else {
      return
    }
  }

  increaseNumberOfDrivers = () => {
    if(this.state.value < 50){
      this.setState({value: parseInt(this.state.value) + 1})
    } else {
      return
    }
  }

  render(){
    const selectedNumberOfDrivers = this.state.data.drivers === undefined ? 
    null : this.state.data.drivers.sort(function(driverOne, driverTwo)
    {return driverTwo.location.bearing-driverOne.location.bearing}).reverse().slice(0, this.state.value)

    const defaultPosition = {lat: 51.5049375, lng: -0.0964509}
    return (
      <div className="App">
          <Divider hidden />
          <Header as='h1' color='teal' textAlign='center'>
            Taxi availability
          </Header>
          <Divider hidden/>
          <Divider horizontal>
            <Header as='h3' color='teal'>
              <Icon name='car' />
              How many taxis would you like to see?
            </Header>
          </Divider>
          <Button color='olive' icon>
            <Icon name='minus' onClick={this.reduceNumberOfDrivers}/>
          </Button>
          <Icon/>
          <Input type='range' inverted min={1} max={50} value={this.state.value} onChange={this.handleChange}/>
          <Icon/>
          <Button color='green' icon>
            <Icon name='plus' onClick={this.increaseNumberOfDrivers}/>
          </Button>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Label size='big' color='green'>{this.state.value}</Label>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Divider hidden fitted/>
          <Button type='submit' color='yellow' size='large' onClick={()=>this.refreshData()} >Refresh available taxis</Button>
          <Divider horizontal>
            <Header as='h4' color='teal'>
              <div>
              <Icon name='map marker alternate' color='purple' /> Your position
              <Icon></Icon>
              <Icon name='map marker alternate' color='green' /> Available taxis
              </div>
            </Header>
          </Divider>
          <div className='map'>
            <Map 
              drivers={selectedNumberOfDrivers}
              defaultPosition = {defaultPosition}
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=ENTER_YOUR_API_KEY_HERE'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `60vh`, width: '80vw' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
      </div>
    );
  }
}

export default App;
