import React from 'react'
import styled from 'styled-components'
import { FlexButton } from './baseComponents'

const Wrapper = styled(FlexButton)`
  height: 100%;
  color: ${({ location }) => {
    let color;
    location ? color = '#0A0A0A' : color = '#F8F8FF'
    return color;
  }};
  width: 50%;
`

const SelectOption = (props) => (
  <Wrapper onClick={() => { return props.handleClick(props.value)}} location={props.location}>
    {props.value.toUpperCase()}
  </Wrapper>
)

export default SelectOption
