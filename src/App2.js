import React from 'react'
import PropTypes from 'prop-types'

const Child = () => {
  return <div><Child2 /></div>
}

// const Child = () => {
//   return <div>Child</div>
// }

const Child2 = () => {
  return <div>Child2</div>
}

const App2 = props => {
  console.log(Child())
  return (
    <div>App2</div>
  )
}

App2.propTypes = {}

export default App2