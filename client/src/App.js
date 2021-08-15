import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { StoreProvider } from "./utils/GlobalState";
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
        <StoreProvider>
          <div style={{ height: "100%" }}>
            <NavigationElements />
            <main className="main-body">
              <Routes />
            </main>
          </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
