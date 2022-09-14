import React from 'react'

import NavigationContext from '../NavigationContext';

class NavigationProvider extends React.Component {
  constructor(props) {
    super(props)

    // Store the `navigation` object in component state
    this.state = {
      pathname: window.location.pathname,
      navigate: this.navigate,
    }
  }

  render() {
    return (
      <NavigationContext.Provider value={this.state}>
        {this.props.children}
      </NavigationContext.Provider>
    )
  }

  // The navigation's `navigate` method updates `navigation` object, and uses
  // the browser's `pushState` method to change the window's URL.
  navigate = (pathname) => this.setState({ pathname })
}

export  default NavigationProvider;
