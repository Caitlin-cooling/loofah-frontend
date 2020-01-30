import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const client = new ApolloClient({
  uri: 'http://localhost:8080/skills'
});

client.query({
  query: gql`
    {
      allSkills {
        id,
        title,
        description
      }
    }
  `
}).then(result => console.log(result));
