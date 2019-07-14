import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlexRowContainer, FlexButton } from './baseComponents'
import styled from 'styled-components'

const Wrapper = styled(FlexButton)`
  min-width: 60px;
  height: 25px;
  padding-left: 6px;
  margin-right: 8px;
`

const Select = styled(FlexRowContainer)`
  width: 80%;
  font-size: 15px;
  background-color: #666;
  color: #F5F5F5;
  justify-content: space-around;

  .small-font {
    font-size: 7px;
    padding-right: 6px;
  }
`

class BannerSelect extends Component {
  constructor(props) {
    super(props)

    this.state = { dropDown: false }
    this.handleClick = this.handleClick.bind(this)
  }

  renderTriangle() {
    let unicode = ''
    this.state.dropDown ? unicode = '\u25B2' : unicode = '\u25BC'
    return unicode
  }

  handleClick() {
    this.setState({ dropDown: !this.state.dropDown })
  }

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <Select>
          <div>{this.props.activeSport.toUpperCase()}</div>
          <div class="small-font">{this.renderTriangle()}</div>
        </Select>
      </Wrapper>
    )
  }
}

const mapState = state => state

export default connect(mapState)(BannerSelect)
