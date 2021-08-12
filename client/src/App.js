import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import Routes from "./Routes";
import NavigationElements from "./pages/NavigationElements/NavigationElements";

import "./App.css";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ height: "100%" }}>
          <NavigationElements />
          <main style={{ marginTop: "10rem" }}>
            <Routes />
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
