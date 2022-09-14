import React, { useContext } from 'react'

import NavigationContext from '../NavigationContext';
import LinkA from '../LinkA';

// const Link = ({ activeStyle, children, ...props }) =>
//   <NavigationContext.Consumer>
//     {navigation => {
//       console.log({ navigation })
//       return (
//         <LinkA style={{...props.style, ...(navigation.pathname === props.href ? activeStyle : {})}}
//           onClick={(e) => {
//           e.preventDefault()
//           navigation.navigate(props.href)
//         }}>
//           {children}
//         </LinkA>
//       )

//     }}
//   </NavigationContext.Consumer>

const Link = ({ activeStyle, children, ...props }) => {
  const navigation = useContext(NavigationContext)
  console.log({ navigation });
  return (
    <LinkA style={{...props.style, ...(navigation.pathname === props.href ? activeStyle : {})}}
      onClick={(e) => {
      e.preventDefault()
      navigation.navigate(props.href)
    }}>
      {children}
    </LinkA>
  )
}


export default Link;