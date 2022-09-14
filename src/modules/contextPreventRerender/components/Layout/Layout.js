import React from 'react'

import Link from '../Link';
import Log from '../Log';

class Layout extends React.PureComponent {
  render() {
    return (
      <div>
        <nav>
          <Link href="/" activeStyle={{color: 'red'}}>
            <Log name="home Link" />
            Home
          </Link>
          <Link href="/browse/" activeStyle={{color: 'red'}}>
            <Log name="browse Link" />
            Browse
          </Link>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;