import React, { Component } from 'react'
import styled from 'styled-components'
import { SelectOption } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'

const Wrapper = styled(FlexRowButton)`
  width: 100%;
  justify-content: space-around;
  padding-top: 15px;
`

const WidgetNavbar = props => (
  <Wrapper>
    {props.options.map(option => <SelectOption handleClick={props.handleClick} key={option} value={option} location={'three-team'} />)}
  </Wrapper>
)

export default WidgetNavbar
