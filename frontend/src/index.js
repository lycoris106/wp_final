import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// to do: set up apollo client
import {
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink
} from '@apollo/client';


const httpLink = new HttpLink({
  uri: 'https://wp-final-front.herokuapp.com:6727/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
