import React, { useState } from 'react'

import NavigationContext from '../NavigationContext';

const NavigationProvider = props => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    // Do not use function as prop, to prevent re-render whole DOM.
    <NavigationContext.Provider value={{ navigate: setPathname, pathname }}>
      {React.cloneElement(props.children, { navigate: setPathname, pathname })}
    </NavigationContext.Provider>
  )
}

export  default NavigationProvider;
