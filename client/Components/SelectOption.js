import React from 'react'
import styled from 'styled-components'
import { FlexButton } from './baseComponents'

const Wrapper = styled(FlexButton)`
  height: 100%;
  color: #0A0A0A;
  width: 50%;
`

const SelectOption = (props) => (
  <Wrapper onClick={() => { return props.handleClick(props.value)} }>
    {props.value.toUpperCase()}
  </Wrapper>
)

export default SelectOption
