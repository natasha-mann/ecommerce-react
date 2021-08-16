import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { isMobile } from "react-device-detect";

import "./App.css";

import { BasketProvider } from "./contexts/BasketProvider";
import Routes from "./Routes";
import NavigationElements from "./pages/NavigationElements/NavigationElements";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Announcements from "./components/Announcements";
import AnnouncementsMobile from "./components/AnnouncementsMobile";
import BasketPopdown from "./components/BasketPopdown";

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
      <BasketProvider>
        <Router>
          <div style={{ height: "100%" }}>
            <NavigationElements />
            <BasketPopdown />
            <main className="main-body">
              {isMobile ? <AnnouncementsMobile /> : <Announcements />}
              <Routes />
            </main>
            <ChatWidget />
            <Footer />
          </div>
        </Router>
      </BasketProvider>
    </ApolloProvider>
  );
}

export default App;
