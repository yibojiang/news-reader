import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const EventTable = props =>
  (<div>
    <h1>Spiderman's Events</h1>
    {
      props.eventLists.map((eventItem) =>
        <EventItem
          key={eventItem.title}
          title={eventItem.title}
          description={eventItem.description}
          onDismiss={() => props.onDismiss(eventItem.title)}
        />)
    }
  </div>);

const EventItem = props => (
  <div key={props.title}>
    <span>{props.title}</span>
    <span>{props.description}</span>
    <span>
      <Button onClick={props.onDismiss}>Dismiss</Button>
    </span>
  </div>);

// transclusion
const Button = (props) =>
  <button className='btn btn-danger' type="button" onClick={props.onClick}>
    {props.children}
  </button>

export default EventTable;
