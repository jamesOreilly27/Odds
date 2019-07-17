import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { SelectOption } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'

const Wrapper = styled(FlexRowButton)`
  width: 80%;
  justify-content: space-around;
  padding-top: 15px;
`

const WidgetNavbar = props => (
  <Wrapper>
    {props.options.map(option => <SelectOption handleClick={props.handleClick} key={option} value={option} />)}
  </Wrapper>
)

export default WidgetNavbar
