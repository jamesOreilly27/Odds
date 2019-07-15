import React from 'react'
import styled from 'styled-components'
import { FlexButton } from './baseComponents'

const Wrapper = styled(FlexButton)`
  height: 100%;
  color: #F5F5F5;
`

const SelectOption = (props) => (
  <Wrapper>
    {props.content.toUpperCase()}
  </Wrapper>
)

export default SelectOption
