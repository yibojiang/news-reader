import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Table = props =>
  (<div>
    <h1>Spiderman's Table</h1>
    {
      props.newsList.map((newsItem) =>
        <NewsItem
          key={newsItem.objectID}
          title={newsItem.title}
          url={newsItem.url}
          author={newsItem.autho}
          num_comments={newsItem.num_comments}
          points={newsItem.points}
          onDismiss={() => props.onDismiss(newsItem.objectID)}
        />)
    }
  </div>);

// destructure
const Foo = ({bar}) => (
  <span>{bar}</span>
);

const NewsItem = props => (
  <div key={props.objectID}>
    <span>
      <a href={props.url}>{props.title}</a>
    </span>
    <span>{props.description}</span>
    <span>{props.num_comments}</span>
    <span>{props.points}</span>
    <span>
      <Button onClick={props.onDismiss}>Dismiss</Button>
    </span>
  </div>
);

// transclusion
const Button = (props) =>
  <button className='btn btn-danger' type="button" onClick={props.onClick}>
    {props.children}
  </button>

export default Table;
