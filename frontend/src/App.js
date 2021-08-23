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
import EditSpot from "./components/EditSpot";
import SplashPage from "./components/Splash";

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

          <Route exact path="/">
            <SplashPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path='/spots'>
            <SpotsPage />
          </Route>

          <Route path="/spots/create">
            <CreateSpot />
          </Route>

          <Route exact path='/spots/:id'>
            <SingleSpot />
          </Route>

          <Route exact path="/spots/:id/edit">
            <EditSpot />
          </Route>

        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
