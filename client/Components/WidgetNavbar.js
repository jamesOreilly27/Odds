import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  width: 80%;
  justify-content: space-around;
  padding-top: 15px;
`

const WidgetNavbar = props => (
  <Wrapper>
    {props.options.map(option => <div>{option.toUpperCase()}</div>)}
  </Wrapper>
)

export default WidgetNavbar
