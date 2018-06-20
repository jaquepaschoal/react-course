'use strict'

import React from 'react'

const square = ({color} ) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px',
  }}/>
)

square.defaultProps = {
  color:'red',
}

export default square