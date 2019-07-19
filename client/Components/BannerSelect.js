import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import styled from 'styled-components'

const Wrapper = styled(FlexButton)`
  min-width: 80px;
  padding-left: 6px;
  margin-right: -4px;
  height: 100%
`

const Select = styled(FlexRowContainer)`
  width: 60%;
  font-size: 15px;
  background-color: #374044;
  color: #F8F8FF;
  justify-content: flex-start;
`

const ActiveSport = styled.div`
  padding-right: 3px;
`

const Arrow = styled.div`
  font-size: 10px;
`

class BannerSelect extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper onClick={this.props.handleClick}>
        <Select>
          <ActiveSport>{this.props.activeSport.toUpperCase()}</ActiveSport>
          <Arrow>{this.props.triangle}</Arrow>
        </Select>
      </Wrapper>
    )
  }
}

const mapState = state => state

export default connect(mapState)(BannerSelect)
