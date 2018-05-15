'use strict'

import React from 'react'
import createReactClass from 'create-react-class'


  const Title = (props) =>(
    <h1>Ola {`${props.name} ${props.lastname}`}</h1>
  )

  Title.defaultProps = {
    name:'Desconhecido',
    lastname: 'Sem sobrenome'
  }




export default Title