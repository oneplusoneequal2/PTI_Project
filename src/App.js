import React from "react";
import { Route, Switch } from "react-router-dom";
import Album from "./pages/Album";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Search from "./pages/Search";
import GlobalStyles from "./styles/GlobalStyles";
import TopAlbums from "./pages/TopAlbums";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/album/:id" component={(props) => <Album {...props} />}
          />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/topalbums" component={TopAlbums} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="*" component={NotFound} />
        </Switch>
        <GlobalStyles />
      </HashRouter>
    );
  }
}

export default App;
