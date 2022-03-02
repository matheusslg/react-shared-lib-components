import React from 'react'

import { StyledDiv } from './styles';

const MyFirstComponent = ({ ...props }) => {
  return (
    <StyledDiv {...props}>Hey! This is my first shared component!</StyledDiv>
  )
}

export default MyFirstComponent