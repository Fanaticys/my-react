import React from 'react'

import Navigation from '../Navigation';
import Log from '../Log';
import Layout from '../Layout';
import MiddleComponent from '../MiddleComponent';

class App extends React.Component {
  render() {
    return (
      <Navigation>
        <MiddleComponent>
          <Log name="NavigationProvider" />
          <Layout>
            <Log name="AppLayout" />
          </Layout>
        </MiddleComponent>
      </Navigation>
    )
  }
  
}

export default App;