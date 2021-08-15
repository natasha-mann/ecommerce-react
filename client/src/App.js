import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { isMobile } from "react-device-detect";

import Routes from "./Routes";
import NavigationElements from "./pages/NavigationElements/NavigationElements";
import Footer from "./components/Footer";

import "./App.css";
import ChatWidget from "./components/ChatWidget";
import Announcements from "./components/Announcements";
import AnnouncementsMobile from "./components/AnnouncementsMobile";

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

          <main className="main-body">
            {isMobile ? <AnnouncementsMobile /> : <Announcements />}
            <Routes />
          </main>
          <ChatWidget />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
