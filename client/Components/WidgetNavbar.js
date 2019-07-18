import React, { Component } from 'react'
import styled from 'styled-components'
import { SelectOption } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'

const Wrapper = styled(FlexRowButton)`
  width: 80%;
  justify-content: space-around;
  padding-top: 15px;
  margin-left: 60px;
  width: 113%;
`

const WidgetNavbar = props => (
  <Wrapper>
    {props.options.map(option => <SelectOption handleClick={props.handleClick} key={option} value={option} />)}
  </Wrapper>
)

export default WidgetNavbar
