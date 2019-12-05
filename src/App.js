import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
            <main className="container main">
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Registration/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/post/create">
                        <CreatePost/>
                    </Route>
                    <Route path="/">
                        <Feed/>
                    </Route>
                </Switch>
            </main>
        </div>
    </Router>
  );
}

export default App;
