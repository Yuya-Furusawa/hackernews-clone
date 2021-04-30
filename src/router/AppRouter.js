import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './../components/Header';
import ShowStories from './../components/ShowStories';
import PageNotFound from './../components/PageNotFound';

const AppRouter = () => {
  return(
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/top' />} />
          <Route
            path="/:type"
            render={({ match }) => {
              const type = match.params.type;
              if (!['top', 'new', 'best'].includes(type)){
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;