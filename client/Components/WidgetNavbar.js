import React, { Component } from 'react'
import styled from 'styled-components'
import { SelectOption } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  width: 98vw;
  height: 10vh;
  border-top: 3px solid #EDEDF2;
  justify-content: flex-start;
  background-color: #FFF;
  
`

const WidgetNavbar = props => (
  <Wrapper>
    {props.options.map(option => <SelectOption handleClick={props.handleClick} key={option} value={option} location={'three-team'} />)}
  </Wrapper>
)

export default WidgetNavbar
