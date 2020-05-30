import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  let currentUser = rest.currentUser;

  return (
    <Route
      {...rest}
      render={() =>
        !!currentUser ? (
          <RouteComponent username={currentUser.username} />
        ) : (
          <Redirect to={'/management-login'} />
        )
      }
    />
  );
};

export default PrivateRoute;
