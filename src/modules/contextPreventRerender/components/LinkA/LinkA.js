import React from 'react'
import PropTypes from 'prop-types'

const LinkA = ({ style, onClick, children }) => {
  console.log('LinkA')
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a style={style} onClick={onClick}>{children}</a>
  )
}

LinkA.propTypes = {

}

export default LinkA
 