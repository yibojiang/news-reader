import React from 'react';
import './App.css';

const Table = props => (
  <div>
    <h1>My News Table</h1>
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
  </div>
);

const NewsItem = (props) => (
  <div key={props.objectID}>
    <span>
      <a href={props.url}>{props.title}</a>
    </span>
    <span>{props.author}</span>
    <span>{props.num_comments}</span>
    <span>{props.points}</span>
    <span>
      <button
        onClick={props.onDismiss}
        type="button"> Dismiss
      </button>
    </span>
  </div>
);


export default Table;
