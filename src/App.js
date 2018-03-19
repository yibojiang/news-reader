import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import EventTable from './EventTable';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      eventList: []
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    fetch('https://gateway.marvel.com:443/v1/public/characters/1009610/events?apikey=6bf52b0cb67fe442523bb467e1b9d437')
      .then(response => response.json())
      .then(result => this.getEvent(result))
      .catch(e => e);
  }

  getEvent(events) {
    console.log(events)
    this.setState({
      eventList: events.data.results
    })
  }

  onDismiss(id) {
    console.log(id)
    function isNotId(item) {
      return item.title !== id;
    }
    const updatedList = this.state.eventList.filter(isNotId);
    this.setState({ eventList: updatedList });
  }

  render() {
    return (
      <div className="App">
        <EventTable eventLists={this.state.eventList} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
