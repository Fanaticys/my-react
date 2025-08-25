import React from 'react';
import { BrowserRouter, Route, useRoutes, Redirect, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import ContextRendering from './modules/contextRendering/components/ContextRendering';
import RenderUnderstanding from './modules/renderUnderstanding/components/RenderUnderstanding';
import ReactKeys from './modules/reactKeys/components/ReactKeys';
import ReduxTest from './modules/reduxTest/components/ReduxTest';
import ContextPreventRerender from './modules/contextPreventRerender/components/App';
import ExampleApp from './modules/exampleApp/components/ExampleApp';
import ReactQuilContainer from './modules/reactQuill/components/ReactQuilContainer';
import Index from './modules/index/components/Index';
import store from './modules/redux/store';
import TestApiRequest from './modules/testApiRequest/components/TestApiRequest';
import TestReactVirtualized from './modules/testReactVirtualized/components/TestReactVirtualized';
import Task from './modules/task/components/Task';

const Routes = () => useRoutes([
  { 
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <Index /> },
      { path: 'context-rendering', element: <ContextRendering /> },
      { path: 'example-app', element: <ExampleApp /> },
      { path: 'context-prevent-rerender', element: <ContextPreventRerender /> }
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      {/* <Route path="/render-understanding" component={RenderUnderstanding} />
      <Route path="/reack-keys" component={ReactKeys} />
      <Route path="/redux-test" component={ReduxTest} />
      <Route path="/react-quill" component={ReactQuilContainer} />
      <Route path="/testApiRequest" component={TestApiRequest} />
      <Route path="/react-virtualized" component={TestReactVirtualized} />
      <Route path="/task" component={Task} />
      <Redirect from="*" to="/" /> */}

      <Routes />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
