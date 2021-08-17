import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsPage from "./components/SpotsPage";
import Footer from "./components/Navigation/footer";
import SingleSpot from "./components/SingleSpot";
import CreateSpot from "./components/CreateSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path='/spots'>
            <SpotsPage />
          </Route>

          <Route path="/spots/create">
            <CreateSpot />
          </Route>

          <Route path='/spots/:id'>
            <SingleSpot />
          </Route>

        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
