import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components/NavBar";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/posts/:id" component={SinglePostPage} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
