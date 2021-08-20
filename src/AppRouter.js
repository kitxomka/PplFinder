import React, {useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const AppRouter = () => {
  const [tabIndex, setTabIndex] = useState("");

  const handleTabSet = (value) => {
    setTabIndex(value);
  }

  return (
    <ThemeProvider>
      <Router>
        <NavBar handleTabSet={handleTabSet}/>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Home {...props} isAuthed={true} tabIndex={tabIndex} />
          )} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
