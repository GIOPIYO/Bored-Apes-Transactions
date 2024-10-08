import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.jsx'
import './index.css'

const client = new ApolloClient({
  uri: 'https://api.studio.thegraph.com/query/89800/livetransactions/version/latest', // Replace with your actual GraphQL API endpoint
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)