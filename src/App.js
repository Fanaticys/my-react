import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ContextRendering from './modules/contextRendering/components/ContextRendering';
import Index from './modules/index/components/Index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/context-rendering" component={ContextRendering} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
