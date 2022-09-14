import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import ContextRendering from './modules/contextRendering/components/ContextRendering';
import RenderUnderstanding from './modules/renderUnderstanding/components/RenderUnderstanding';
import ReactKeys from './modules/reactKeys/components/ReactKeys';
import ReduxTest from './modules/reduxTest/components/ReduxTest';
import ContextPreventRerender from './modules/contextPreventRerender/components/App';
import ReactQuilContainer from './modules/reactQuill/components/ReactQuilContainer';
import Index from './modules/index/components/Index';
import store from './modules/redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/context-rendering" component={ContextRendering} />
        <Route path="/context-prevent-rerender" component={ContextPreventRerender} />
        <Route path="/render-understanding" component={RenderUnderstanding} />
        <Route path="/reack-keys" component={ReactKeys} />
        <Route path="/redux-test" component={ReduxTest} />
        <Route path="/react-quill" component={ReactQuilContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
