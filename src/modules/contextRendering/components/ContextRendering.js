import React from 'react'

import ConsumerComponent from './ConsumerComponent';
import MiddleComponent from './MiddleComponent';
import Provider from './Provider';

const ContextRendering = props => {
  return (
    <Provider>
      <MiddleComponent>
        <MiddleComponent>
          <ConsumerComponent />
        </MiddleComponent>
      </MiddleComponent>
    </Provider>
  )
}

ContextRendering.propTypes = {

}

export default ContextRendering
