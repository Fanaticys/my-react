import React from 'react'

import Navigation from '../Navigation';
import Log from '../Log';
import Layout from '../Layout';

class App extends React.Component {
  render() {
    return (
      <Navigation>
        <Log name="NavigationProvider" />
        <Layout>
          <Log name="AppLayout" />
        </Layout>
      </Navigation>
    )
  }
  
}

export default App;